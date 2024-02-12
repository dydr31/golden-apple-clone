import classes from "./LogIn.module.css";

import { CloseIcon } from "./UI/CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";

import { useState } from "react";

import { motion } from "framer-motion";
import { collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { LogInWithGoogle } from "./LogInWithGoogle";
import { Backdrop } from "./UI/Backdrop";
import { Background } from "./UI/Background";

export const LogIn = () => {
  const dispatch = useDispatch();

  const closeIconHandler = () => {
    dispatch(headerActions.logInForm());
  };

  const openSignUpForm = () => {
    dispatch(headerActions.signUpForm());
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      let response = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("Log In", true);
      localStorage.setItem("Email", email);
      console.log(response);
    } catch (err) {
      console.error("error");
    }
  };

  return (
    <>
      <Backdrop />
      <Background>
        <CloseIcon onClick={closeIconHandler} />
        <div className={classes["log-in"]}>
          <h2>Log In</h2>

          {/* <form onSubmit={e => {e.preventDefault(); signIn() }}>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>

            <ButtonBlack type="submit" text="submit" onClick={signIn}/>
          </form> */}

          <LogInWithGoogle />

          {/* <p>
            already have an account?{" "}
            <strong onClick={openSignUpForm}>sign up </strong>
          </p> */}
        </div>
      </Background>
    </>
  );
};
