import React, { useState, useContext } from "react";
import { Form } from "react-router-dom";
import InputBoxWithLabel from "../common/InputBoxWithLabel";
import CommonButton from "../common/CommonButton";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { database } from "../Firebase/FirebaseConfig.js";
import { useNavigate } from "react-router-dom";
import AuthUser from "../utils/AuthUser.jsx";
import { toast } from "react-toastify";
const LoginSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [login, setLogin] = useState(false);
  const { auth } = useContext(AuthUser);

  const history = useNavigate();

  const emailNameHandler = (email) => {
    localStorage.setItem("userName", JSON.stringify(email));
  };

  const byPassToUser = () => {
    auth.setIsAuthenticated(true);
  };

  const submitHandler = (e, type) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/; // Regular expression for email validation

    if (!email && !password) {
      setEmailError(true);
      setPasswordError(true);
    } else if (!email) {
      setEmailError(true);
      setPasswordError(false);
    } else if (!password || password.length < 6) {
      setEmailError(false);
      setPasswordError(true);
    } else if (!emailRegex.test(email)) {
      setEmailError(true);
      setPasswordError(false);
    } else if (type === "Sign-up") {
      setEmailError(false);
      setPasswordError(false);
      emailNameHandler(email);
      byPassToUser();
      createUserWithEmailAndPassword(database, email, password)
        .then((credentials) => {
          console.log(credentials, "cred");
          toast.success("Sign-in SuccessFull!");
          history("/user");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      setEmailError(false);
      setPasswordError(false);
      emailNameHandler(email);
      byPassToUser();
      signInWithEmailAndPassword(database, email, password)
        .then((credentials) => {
          console.log(credentials, "cred");
          toast.success("Sign-in SuccessFull!");
          history("/user");
        })
        .catch((err) => {
          alert(err.code);
          //   setLogin(true);
        });
    }
  };

  return (
    <div className="flex flex-col flex-auto w-full h-screen">
      <div className="h-full">
        <div className="grid grid-cols-3 h-full">
          <div className="bg-blue-900"></div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="min-w-[450px] px-8">
              <div className="mb-8">
                <h1 className="text-3xl font-medium">
                  {login
                    ? "Welcome Back"
                    : "Please fill below detail to Sign-up"}
                </h1>
                <p>
                  Please enter your credentials to{" "}
                  {login ? "Sign-in" : "Sign-up"} !
                </p>
              </div>
              <Form
                onSubmit={(e) =>
                  submitHandler(e, login ? "Sign-in" : "Sign-up")
                }
              >
                <InputBoxWithLabel
                  labelName={"Name"}
                  type={"text"}
                  placeHolder={"Enter your name"}
                  value={email}
                  monitorState={(e) => setEmail(e.target.value)}
                  errorState={emailError ? "Please enter a valid email" : ""}
                />
                <InputBoxWithLabel
                  labelName={"Password"}
                  type={"password"}
                  placeHolder={"Enter password"}
                  value={password}
                  monitorState={(e) => setPassword(e.target.value)}
                  errorState={
                    passwordError
                      ? "Password should be minimum 6 character"
                      : ""
                  }
                />
                <CommonButton
                  buttonName={login ? "Sign-in" : "Sign-up"}
                  //   buttonSubmit={submitHandler}
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
