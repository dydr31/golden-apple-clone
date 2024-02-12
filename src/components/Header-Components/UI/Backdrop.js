import { motion } from "framer-motion";
import classes from "./Backdrop.module.scss";

export const Backdrop = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={classes["backdrop"]}
      onClick={props.onClick}
    />
  );
};
