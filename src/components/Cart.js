import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";
import close from "../pics/close.png";
import { headerActions } from "../store";
import { CartItem } from "./UI/CartItem";
import { ButtonBlack } from "./UI/ButtonBlack";

import { motion } from "framer-motion";
import { useEffect } from "react";

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

  useEffect(() => {
    console.log('cart')
    console.log(cart.items)
  }, [dispatch, cart])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={classes["backdrop"]}
        onClick={closeIconHandler}
      />
      <motion.div
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        exit={{ x: 800 }}
        transition={{ bounce: 0 }}
        className={classes["background"]}
      >
        <img
          src={close}
          className={classes["close-icon"]}
          onClick={closeIconHandler}
        />

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
      </motion.div>
    </>
  );
};
