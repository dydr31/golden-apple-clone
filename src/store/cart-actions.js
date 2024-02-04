import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { cartActions } from "./cartSlice";


const userRef = doc(db, "users", localStorage.getItem("uid"));
export const sendCartData = async (cart) => {

  try {
    await updateDoc(userRef, { cart: cart });
  } catch (err) {
    console.log("error updating cart information");
  }
};


export const fetchCartData = () => {
  
  return async (dispatch) => {
    const fetchData = async () => {
      let response = await getDoc(userRef);
      const data = response.data().cart;
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items,
          quantity: cartData.quantity,
          total: cartData.total,
          likes: cartData.likes,
        })
      );
    } catch (err) {
      console.error("can't get or update cart info");
    }
  };
};

export const sendLikesData = async(likes) => {
  try {
    await updateDoc(userRef, {likes: likes});
  } catch (err){
    console.error('error updating likes')
  }

}
