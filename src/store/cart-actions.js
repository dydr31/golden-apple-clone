import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { cartActions } from "./cartSlice";



export const sendCartData = async (cart) => {
  const userRef = doc(db, "users", localStorage.getItem("uid"));

  try {
    await updateDoc(userRef, { cart: cart });
  } catch (err) {
    console.log("error updating cart information");
  }
};


export const fetchCartData = () => {
  const userRef = doc(db, "users", localStorage.getItem("uid"));
  
  return async (dispatch) => {
    const fetchData = async () => {
      let response = await getDoc(userRef);
      console.log(response.data().cart)
      const data = response.data().cart;
      return data;
    };

    try {
      console.log('a')
      if(localStorage.getItem('uid') === undefined){
        console.log('b')
      }
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
  const userRef = doc(db, "users", localStorage.getItem("uid"));
  try {
    await updateDoc(userRef, {likes: likes});
  } catch (err){
    console.error('error updating likes')
  }

}
