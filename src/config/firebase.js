import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPX9pohejt1NIt05QNGvCj12Ddiy2v2F4",

  authDomain: "candle-shop-ab739.firebaseapp.com",

  projectId: "candle-shop-ab739",

  storageBucket: "candle-shop-ab739.appspot.com",

  messagingSenderId: "862755094302",

  appId: "1:862755094302:web:38513f6c0d5a7fbf89d30f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
