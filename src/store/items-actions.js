import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const productList = collection(db, "products");

export const getProductList = () => {
  return async (dispatch) => {

    try {
      const data = await getDocs(productList);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return filteredData;
    } catch (err) {
      console.error("error");
    }
  };
};
