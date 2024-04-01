import classes from "./AccountSettings.module.css";

import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { ButtonBlack } from "../UI/ButtonBlack";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store";
import { useState } from "react";
import { cartActions } from "../../store/cartSlice";
import { CloseIcon } from "./UI/CloseIcon";
import { Backdrop } from "./UI/Backdrop";
import { Background } from "./UI/Background";

export const AccountSettings = () => {
  const dispatch = useDispatch();
  const loginSlice = useSelector(state => state.loginSlice)

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
    {console.log(loginSlice)}
      <Backdrop onClick={closeHandler} />
      <Background>
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
      </Background>
    </>
  );
};
