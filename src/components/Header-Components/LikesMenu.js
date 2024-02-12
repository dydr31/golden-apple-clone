import classes from "./LikesMenu.module.scss";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store";
import { CloseIcon } from "./UI/CloseIcon";
import { Backdrop } from "./UI/Backdrop";
import { Background } from "./UI/Background";

export const LikesMenu = () => {
  const dispatch = useDispatch();

  const closeIconHandler = () => {
    dispatch(headerActions.likes());
  };
  return (
    <>
      <Backdrop onClick={closeIconHandler} />

      <Background>
        <CloseIcon onClick={closeIconHandler} />
        <div>
          <ul></ul>
        </div>
      </Background>
    </>
  );
};
