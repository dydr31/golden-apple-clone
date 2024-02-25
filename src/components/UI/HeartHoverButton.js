import heart from "../../pics/heart.png";
import heartFilled from "../../pics/heart(1).png";
import classes from "./HeartHoverButton.module.css";
import { useState } from "react";

export const HeartHoverButton = (props) => {

  const [onMouseHover, setIsOnMouseHover] = useState(false)

  const onMouseLeaveHandler = () => {
    setIsOnMouseHover(false)
  };

  const onMouseEnterHandler = () => {
    setIsOnMouseHover(true)
  }

  const [isHeartClicked, setIsHeartClicked] = useState(props.wasLiked);
  
  const clickHandler = () => {
    props.on(!isHeartClicked)
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <button
      className={classes["heart-button"]}
      

    >
      <img
        src={`${((!onMouseHover && !isHeartClicked) ) ? heart : heartFilled}`}
        alt='Like'
        onClick={clickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      />
    </button>
  );
};
