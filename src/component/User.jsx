import React from "react";
import CommonButton from "../common/CommonButton";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { database } from "../Firebase/FirebaseConfig";
import "react-toastify/dist/ReactToastify.css";
import AuthUser from "../utils/AuthUser";
import ErrorPage from "../pages/ErrorPage";
import ActiveTable from "./ActiveTable";
import { toast } from "react-toastify";

const User = () => {
  const { auth } = useContext(AuthUser);

  const history = useNavigate();

  const localUserName = JSON.parse(localStorage.getItem("userName")).split(
    "@"
  )[0];

  const fnSignOut = () => {
    signOut(database).then(() => {
      toast.success("User SuccessFully Sign-out");
      auth.setIsAuthenticated(false);
      localStorage.setItem("isAuthenticated", "false");
      history("/");
    });
  };

  return (
    <>
      {auth.isAuthenticated === true ? (
        <>
          <div className=" flex flex-row justify-around mt-6">
            <h1 className=" text-3xl font-medium">
              Welcome {localUserName} to Vistaraa{" "}
            </h1>
            <CommonButton buttonSubmit={fnSignOut} buttonName={"Sign-out"} />
          </div>
          <ActiveTable />
        </>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default User;
