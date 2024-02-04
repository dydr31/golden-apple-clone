import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAKFNOWH3H6o-2E5uTger454yfbMfaiY78",
  authDomain: "shop-project-ee1c7.firebaseapp.com",
  projectId: "shop-project-ee1c7",
  storageBucket: "shop-project-ee1c7.appspot.com",
  messagingSenderId: "1070676172757",
  appId: "1:1070676172757:web:9b98dfe03adf57c891e75c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)