import React from "react";
import CommonButton from "../common/CommonButton";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { database } from "../Firebase/FirebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthUser from "../utils/AuthUser";
import ErrorPage from "../pages/ErrorPage";

const User = () => {
  const { user } = useContext(UserContext);
  const { auth } = useContext(AuthUser);

  const history = useNavigate();

  const username = user.name.split("@")[0];

  const fnSignOut = () => {
    toast.success("User SuccessFully Sign-out");
    signOut(database).then(() => {
      history("/");
      auth.setIsAuthenticated(false);
      localStorage.setItem("isAuthenticated", "false");
    });
  };

  return (
    <>
      {auth.isAuthenticated === true ? (
        <>
          <div className=" flex flex-row justify-around mt-6">
            <h1 className=" text-3xl font-medium">
              Welcome {username} to Vistaraa{" "}
            </h1>
            <CommonButton buttonSubmit={fnSignOut} buttonName={"Sign-out"} />
          </div>
          <ToastContainer />
        </>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default User;
