import img from "../../pics/candle.jpg";
import close from "../../pics/close.png";
import classes from "./CartItem.module.css";
import { useEffect, useState } from "react";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData } from "../../store/cart-actions";

export const CartItem = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let total = (props.price * (100 - props.sale)) / 100;
  let showOldPrice = false;
  if (total != props.price) {
    showOldPrice = true;
  }
  total = total * props.amount;
  let oldPrice = props.price * props.amount;

  const [showRemove, setShowRemove] = useState(false);

  const removeButtonHandler = () => {
    setShowRemove(!showRemove);
  };

  const removeItemFromCart = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  useEffect(() => {
    if (localStorage.getItem("uid") != undefined) {
      sendCartData(cart);
    }
  }, [cart, dispatch]);
  return (
    <li
      className={classes["cart-item"]}
      onMouseEnter={removeButtonHandler}
      onMouseLeave={removeButtonHandler}
    >
      {showRemove && (
        <img
          src={close}
          className={classes["remove"]}
          onClick={removeItemFromCart}
        />
      )}
      <img src={img} className={classes["img"]} />
      <div className={classes["cart-info"]}>
        <div className={classes["cart-info-main"]}>
          <p className={classes["cart-item__main__title"]}>{props.title}</p>
          <p className={classes["cart-item__main__name"]}>{props.name.toUpperCase()}</p>
          {/* <p className={classes["cart-item__main__amount"]}>× {props.amount}</p> */}
        </div>

        <div className={classes["cart-info-main-price"]}>
          
          {showOldPrice && (
            <p className={classes["cart-info-old-price"]}>${oldPrice}</p>
          )}
          <p>${total}</p>
        </div>
      </div>
    </li>
  );
};
