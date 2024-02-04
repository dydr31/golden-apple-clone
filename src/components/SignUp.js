import classes from "./SignUp.module.css";
import close from "../pics/close.png";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../store";

import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

import { motion } from "framer-motion";



export const SignUp = () => {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.menu);

  const closeForm = () => {
    dispatch(headerActions.signUpForm());
  };

  const openLogInForm = () => {
    dispatch(headerActions.logInForm());
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(email, password);
      addUserToDb()

    } catch (err) {
      console.error(err);
    }
  };

  const isLoggedIn = localStorage.getItem('log-in')

  const usersRef = collection(db, "users");

  const addUserToDb = async() => {
    try{
        await addDoc(usersRef, {
            email: email,
            cart: [],
            registrationDate: new Date (),
        })
    }
    catch (err){
        console.error('error')
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes["backdrop"]}
      />
      <motion.div
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        exit={{ x: 800 }}
        transition={{ bounce: 0 }}
        className={classes["white-background"]}
      >
        <img
          src={close}
          className={classes["close-icon"]}
          onClick={closeForm}
        />
        <div className={classes["log-in"]}>
          <h2>Sign Up</h2>

          <form onSubmit={signUp()}>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                signUp();
                closeForm();
              }}
            >
              submit
            </button>
          </form>
          <p>
            already have an account?{" "}
            <strong onClick={openLogInForm}>sign in </strong>
          </p>
        </div>
      </motion.div>
    </>
  );
};
