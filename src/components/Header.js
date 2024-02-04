import classes from "./Header.module.css";
import menuImg from "../pics/menu.png";
import cartIcon from "../pics/shopping-bag.png";
import heart from "../pics/heart.png";
import user from "../pics/user.png";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../store";
import { cartActions } from "../store/cartSlice";

import { LogIn } from "./LogIn";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import { Outlet } from "react-router-dom";
import { SignUp } from "./SignUp";
import { CartBadge } from "./UI/CartBadge";

import { AnimatePresence } from "framer-motion";
import { Banner } from "./Banner";
import { AccountSettings } from "./AccountSettings";
import { fetchCartData } from "../store/cart-actions";

function Header() {
  const header = useSelector((state) => state.menu);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let isLoggedIn = localStorage.getItem("Log In");
  if (isLoggedIn != "true") {
    isLoggedIn = false;
  }

  const menuHandler = () => {
    dispatch(headerActions.menu());
  };

  const userIconHandler = () => {
    dispatch(headerActions.showSettings());
    dispatch(headerActions.logInForm());
  };

  const cartIconHandler = () => {
    dispatch(headerActions.cart());
  };

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <>
      <header>
        <div className={classes["header-tabs"]}>
          <div>
            <img src={menuImg} onClick={menuHandler} />
          </div>

          <h1 className={classes["logo"]}>
            <Link to="/">Your Local Handmade Candle Business</Link>
          </h1>

          <div className={classes["tabs"]}>
            <img src={heart} className={classes["hide-on-mobile"]} />
            <img
              src={user}
              onClick={userIconHandler}
              className={classes["hide-on-mobile"]}
            />
            <div>
              <CartBadge number={cart.quantity} />
              <img src={cartIcon} onClick={cartIconHandler} />
            </div>
          </div>
        </div>
      </header>
      <Banner />
      <AnimatePresence>
        {!isLoggedIn && header.logInForm && <LogIn />}
        {!isLoggedIn && header.signUpForm && <SignUp />}
        {isLoggedIn && header.settings && <AccountSettings />}
        {header.cart && <Cart />}
        {header.menu && <Menu />}{" "}
      </AnimatePresence>

      <Outlet />
    </>
  );
}

export default Header;
