import classes from "./Header.module.css";
import menuImg from "../pics/menu.png";
import cartIcon from "../pics/shopping-bag.png";
import heart from "../pics/heart.png";
import user from "../pics/user.png";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../store";

import { LogIn } from "./Header-Components/LogIn";
import { Cart } from "./Header-Components/Cart";
import { Link } from "react-router-dom";
import { Menu } from "./Header-Components/Menu";
import { Outlet } from "react-router-dom";
import { SignUp } from "./Header-Components/SignUp";
import { CartBadge } from "./UI/CartBadge";

import { AnimatePresence } from "framer-motion";
import { Banner } from "./Banner";
import { AccountSettings } from "./Header-Components/AccountSettings";
import { fetchCartData } from "../store/cart-actions";
import { LikesMenu } from "./Header-Components/LikesMenu";

function Header() {
  const header = useSelector((state) => state.menu);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let isLoggedIn = localStorage.getItem("Log In");
  if (isLoggedIn !== "true") {
    isLoggedIn = false;
  }

  const menuHandler = () => {
    dispatch(headerActions.header());
  };

  const userIconHandler = () => {
    dispatch(headerActions.showSettings());
    dispatch(headerActions.logInForm());
  };

  const cartIconHandler = () => {
    dispatch(headerActions.cart());
  };

  const heartIconHandler = () => {
    dispatch(headerActions.likes());
  };

  useEffect(() => {
    //if (isLoggedIn === true) {
      dispatch(fetchCartData());
   // }
  }, [dispatch]);

  return (
    <>
      <header>
        <div className={classes["header-tabs"]}>
          <div>
            <img src={menuImg} onClick={menuHandler} alt='Menu'/>
          </div>

          <h1 className={classes["logo"]}>
            <Link to="/">Your Local Handmade Candle Business</Link>
          </h1>

          <div className={classes["tabs"]}>
            <img
              src={heart}
              alt='Likes'
              className={classes["hide-on-mobile"]}
              onClick={heartIconHandler}
            />
            <img
              src={user}
              alt='User'
              onClick={userIconHandler}
              className={classes["hide-on-mobile"]}
            />
            <div>
              <CartBadge number={cart.quantity} />
              <img src={cartIcon} alt='cart' onClick={cartIconHandler} />
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
        {header.menu && <Menu />} {header.likes && <LikesMenu />}
      </AnimatePresence>

      <Outlet />
    </>
  );
}

export default Header;
