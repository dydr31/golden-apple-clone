import classes from "./AccountSettings.module.css";
import close from "../pics/close.png";

import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

import { motion } from "framer-motion";
import { ButtonBlack } from "./UI/ButtonBlack";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../store";
import { useState } from "react";
import { cartActions } from "../store/cartSlice";

export const AccountSettings = (props) => {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.menu);
  const cart = useSelector((state) => state.cart)
  const [showLogOutMessage, setShowLogOutMessage] = useState(false);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.setItem("Log In", false);
      console.log("you logged out");
      localStorage.setItem('uid', undefined)
      setShowLogOutMessage(true);
      dispatch(cartActions.clearCart())
      setTimeout(() => {
        closeHandler()
      }, 2200)
    } catch (err) {
      console.error(err);
    }
  };

  const closeHandler = () => {
    dispatch(headerActions.showSettings());
  };

  const email = localStorage.getItem("Email");

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={classes["backdrop"]}
        onClick={closeHandler}
      />
      <motion.div
        className={classes["account-settings"]}
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        exit={{ x: 800 }}
        transition={{ bounce: 0 }}
      >
        <img
          src={close}
          className={classes["close-icon"]}
          onClick={closeHandler}
        />
        <div className={classes["settings-content"]}>
          {!showLogOutMessage && (
            <>
              <h2>{email}</h2>
              <ButtonBlack text={"Log Out"} onClick={logout} />
            </>
          )}
          {showLogOutMessage && <h2>Successfully logged out</h2>}
        </div>
      </motion.div>
    </>
  );
};
