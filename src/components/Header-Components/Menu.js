import classes from "./Menu.module.css";
import arrow from "../../pics/right-arrow.png";
import whatsapp from "../../pics/whatsapp.png";
import pin from "../../pics/maps-and-flags.png";

import { useSelector, useDispatch } from "react-redux";
import { headerActions } from "../../store";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import { Backdrop } from "./UI/Backdrop";

export const Menu = (props) => {
  const header = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  let showSettings = false;
  if (localStorage.getItem("Log In") == 'true') {
    
    showSettings = true
  }
  

  const menuHandler = () => {
    dispatch(headerActions.header());
  };

  const catalogueHandler = () => {
    dispatch(headerActions.catalogue());
  };

  const logInHandler = () => {
    dispatch(headerActions.logInForm());
  };

  const settingsHandler = () => {
    dispatch(headerActions.showSettings());
  };

  return (
    <>
      <Backdrop onClick={menuHandler}/>
      <motion.nav
        className={classes["menu"]}
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        exit={{ x: -500 }}
        transition={{ bounce: 0 }}
      >
        <ul className={classes["first-level"]}>
          <li onClick={catalogueHandler}>
            <p className={classes["l"]}>catalogue</p>
            <img src={arrow} />
          </li>
          <li>new items</li>
          <li>popular</li>
          <div className={classes["buttons-section"]}>
            {!showSettings && (
              <button className={classes["log-in"]} onClick={logInHandler}>
                <p>log in</p>
                <img src={arrow} />
              </button>
            )}

            {showSettings && (
              <button className={classes["log-in"]} onClick={settingsHandler}>
                <p>settings</p>
                <img src={arrow} />
              </button>
            )}

            <button className={classes["log-in"]} onClick={logInHandler}>
              <p>you liked</p>
              <img src={arrow} />
            </button>
          </div>
          <section>
            <div className={classes["section-insert"]}>
              <p className={classes["grey-text"]}>address</p>
              <div>
                <img src={pin} /> <p>City Name, Something st, 123</p>
              </div>
            </div>
            <div className={classes["section-insert"]}>
              <p className={classes["grey-text"]}>contacts</p>
              <div>
                <img src={whatsapp} /> <p>1234567890</p>
              </div>
            </div>
          </section>
        </ul>

        <AnimatePresence>
          {header.catalogue && (
            <motion.ul
              className={classes["second-level"]}
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              exit={{ x: -500 }}
              transition={{ bounce: 0 }}
            >
              <img
                src={arrow}
                className={classes["left-arrow"]}
                onClick={catalogueHandler}
              />
              <li onClick={menuHandler}>
                <Link to="/catalogue0">scented candles</Link>
              </li>
              <li onClick={menuHandler}>
                <Link to="/on-sale">on sale</Link>
              </li>
              
            </motion.ul>
          )}{" "}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
