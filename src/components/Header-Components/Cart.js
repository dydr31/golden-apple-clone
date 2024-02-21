import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";
import { headerActions } from "../../store";
import { CartItem } from "./CartItem";
import { ButtonBlack } from "../UI/ButtonBlack";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { CloseIcon } from "./UI/CloseIcon";
import { Backdrop } from "./UI/Backdrop";
import { Background } from "./UI/Background";

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const closeIconHandler = () => {
    dispatch(headerActions.cart());
  };

  let showMessage = true;
  if (cart.quantity != 0) {
    showMessage = false;
  }

  // useEffect(() => {
  //   // console.log("cart");
  //   // console.log(cart.items);
  // }, [dispatch, cart]);

  return (
    <>
      <Backdrop onClick={closeIconHandler} />

      <Background>

        <CloseIcon onClick={closeIconHandler} />

        {showMessage && (
          <h2 className={classes["message"]}>There's nothing in here yet...</h2>
        )}

        {!showMessage && (
          <>
            <div className={classes["content-content"]}>
              <div className={classes["cart-header"]}>
                <h2>Cart</h2>
                <p className={classes["cart-quantity"]}>
                  / {cart.quantity} items
                </p>
              </div>

              <ul className={classes["cart-content"]}>
                {cart.items.map((x) => (
                  <CartItem
                    key={x.id}
                    id={x.id}
                    title={x.title}
                    name={x.name}
                    price={x.price}
                    sale={x.sale}
                    amount={x.quantity}
                  />
                ))}
              </ul>
              <div className={classes["total"]}>
                <h2>Total Sum: </h2>
                <p>${cart.total}</p>
              </div>
              <div className={classes.button}>
                <ButtonBlack text={"checkout"} />
              </div>
            </div>
          </>
        )}
        
      </Background>
    </>
  );
};
