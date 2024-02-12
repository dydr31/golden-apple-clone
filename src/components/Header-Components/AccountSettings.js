import classes from "./AccountSettings.module.css";

import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { motion } from "framer-motion";
import { ButtonBlack } from "../UI/ButtonBlack";
import { useDispatch} from "react-redux";
import { headerActions } from "../../store";
import { useState } from "react";
import { cartActions } from "../../store/cartSlice";
import { CloseIcon } from "./UI/CloseIcon";
import { Backdrop } from "./UI/Backdrop";

export const AccountSettings = () => {
  const dispatch = useDispatch();

  const [showLogOutMessage, setShowLogOutMessage] = useState(false);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.setItem("Log In", false);
      console.log("you logged out");
      localStorage.setItem("uid", undefined);
      setShowLogOutMessage(true);
      dispatch(cartActions.clearCart());
      setTimeout(() => {
        closeHandler();
      }, 2200);
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
      <Backdrop onClick={closeHandler}/>
      <motion.div
        className={classes["account-settings"]}
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        exit={{ x: 800 }}
        transition={{ bounce: 0 }}
      >
        <CloseIcon onClick={closeHandler} />
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
