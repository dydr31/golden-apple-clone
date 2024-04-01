import { ButtonBlack } from "../UI/ButtonBlack";

import { googleProvider } from "../../config/firebase";
import { auth } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store";
import { cartActions } from "../../store/cartSlice";

export const LogInWithGoogle = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const signInWithGoogle = async () => {
    try {
      let response = await signInWithPopup(auth, googleProvider);
      localStorage.setItem("Log In", true);
      localStorage.setItem("Email", response.user.email);

      dispatch(headerActions.logInForm());

      findIsUserInDatabase(response.user.email, response.user.displayName);
    } catch (err) {
      console.error(err);
    }
  };

  const usersRef = collection(db, "users");

  const findIsUserInDatabase = async (email, name) => {
    try {
      const usersCollection = await getDocs(usersRef);
      const filteredUsersCollection = usersCollection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      let found = filteredUsersCollection.filter((x) => x.email === email);

      if (found.toString() === "") {
        console.log("user not found. proceed with adding user to db");

        addUserToDatabase(email, name);
        let newUid = fetchUid(email);
        localStorage.setItem("uid", newUid);
      } else {
        dispatch(cartActions.addUid(found[0].id));
        localStorage.setItem("uid", found[0].id);
        console.log(found[0].cart)
        dispatch(cartActions.replaceCart(found[0].cart))
        console.log("user found");
      }
    } catch (err) {
      console.log("error finding user in users collection");
    }
  };

  const addUserToDatabase = async (email, name) => {
    try {
      await addDoc(usersRef, {
        name: name,
        email: email,
      });
      console.log("user added to db");
    } catch (err) {
      console.log("error adding google user to users collection");
    }
  };

  const fetchUid = async (email) => {
    try {
      const usersCollection = await getDocs(usersRef);
      const filteredUsersCollection = usersCollection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      let found = filteredUsersCollection.find((x) => x.email === email);
      console.log(found.id);
      localStorage.setItem("uid", found.id);
    } catch (err) {
      console.error("ugggghhhh");
    }
  };

  return (
    <>
      <ButtonBlack onClick={signInWithGoogle} text="log in with Google" />
    </>
  );
};
