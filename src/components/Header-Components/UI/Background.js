import classes from "./Background.module.scss";
import { motion } from "framer-motion";

export const Background = (props) => {
  return (
    <motion.div
      initial={{ x: 800 }}
      animate={{ x: 0 }}
      exit={{ x: 800 }}
      transition={{ bounce: 0 }}
      className={classes["background"]}
    >
      {props.children}
    </motion.div>
  );
};
