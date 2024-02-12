import classes from "./LikesMenu.module.scss";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store";
import { CloseIcon } from "./UI/CloseIcon";
import { Backdrop } from "./UI/Backdrop";

export const LikesMenu = () => {
  const dispatch = useDispatch();

  const closeIconHandler = () => {
    dispatch(headerActions.likes());
  };
  return (
    <>
      <Backdrop onClick={closeIconHandler} />
      <motion.div
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        exit={{ x: 800 }}
        transition={{ bounce: 0 }}
        className={classes["background"]}
      >
        <CloseIcon onClick={closeIconHandler} />
        <div>
          <ul>
            
          </ul>

        </div>

      </motion.div>
    </>
  );
};
