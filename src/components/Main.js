import pic from "../pics/arrangement.jpg";
import classes from "./Main.module.css";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Main = () => {
  const [doAnimate, setDoAnimate] = useState(false);

  const animateHandler = () => {
    setDoAnimate(!doAnimate);
  };
  return (
    <div className={classes["main"]}>
      {/* <img src={pic} /> */}
      <div
        className={classes["background-pink"]}

      />
      <AnimatePresence>
        {doAnimate && (
          <motion.div
            initial={{ x: 2000, backgroundColor: [ '#000000']}}
            animate={{ x: 0, backgroundColor: [ '#795FF3' , '#FF67f3']}}
            exit={{ x: -2000, }}
            transition={{bounce:0, duration: 1}}
            // whileHover={{backgroundColor: [ '#7956f3' , '#2367f3']}}
            className={classes["background-green"]}
          />
        )}
      </AnimatePresence>
      <p
        onMouseEnter={animateHandler}
        onMouseLeave={animateHandler}
        className={classes["description"]}
      >
        Here was supposed to be a huge and beautiful image but they all cost
        money. Wasn't able to find one for free :(
      </p>
    </div>
  );
};
