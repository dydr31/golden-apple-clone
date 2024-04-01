import { db, auth } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../config/firebase";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { addDoc } from "firebase/firestore";



export const signInWithGoogle = async () => {
  try {
    let response = await signInWithPopup(auth, googleProvider);
    localStorage.setItem("Log In", true);
    localStorage.setItem("Email", response.user.email);
    // dispatch(headerActions.logInForm());
    findIsUserInDatabase(response.user.email, response.user.displayName);
  } catch (err) {
    console.error(err);
    return null
  }
};

const usersRef = collection(db, "users");

export const findIsUserInDatabase = async (email, name) => {
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
      return newUid
    } else {
    //   dispatch(cartActions.addUid(found[0].id));
      localStorage.setItem("uid", found[0].id);
      console.log(found[0].cart);

    //   dispatch(cartActions.replaceCart(found[0].cart));
      console.log("user found");
      return found[0].id
    }
  } catch (err) {
    console.log("error finding user in users collection");
    return null
  }
};

export const addUserToDatabase = async (email, name) => {
  try {
    await addDoc(usersRef, {
      name: name,
      email: email,
    });
    console.log("user added to db");
  } catch (err) {
    console.log("error adding google user to users collection");
    return null
  }
};

export const fetchUid = async (email) => {
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
    return null
  }
};
