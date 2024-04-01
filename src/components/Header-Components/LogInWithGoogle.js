import { ButtonBlack } from "../UI/ButtonBlack";
import { signInWithGoogle } from "../../store/login-actions";

import { googleProvider } from "../../config/firebase";
import { auth } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store";
import { cartActions } from "../../store/cartSlice";
import { loginActions } from "../../store/loginSlice";

export const LogInWithGoogle = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const loginSlice = useSelector((state) => state.login)

  const logInWithGoogleHandler = async () => {
    dispatch(loginActions.logIn('asdsdssa'))
    // let uid = await signInWithGoogle()
    // if (uid !== null){
    //   dispatch(headerActions.logInForm());
    //   console.log(loginSlice)
    // }
    
  }

  return (
    <>
    {console.log(loginSlice)}
      <ButtonBlack onClick={logInWithGoogleHandler} text="log in with Google" />
    </>
  );
};
