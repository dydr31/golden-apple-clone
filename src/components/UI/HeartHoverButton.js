import heart from "../../pics/heart.png";
import heartFilled from "../../pics/heart(1).png";
import classes from "./HeartHoverButton.module.css";
import { useState } from "react";

export const HeartHoverButton = (props) => {
  const [isHeartFilled, setIsHeartFilled] = useState(props.wasLiked);
  const mouseHandler = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const clickHandler = () => {
    props.on(!isHeartClicked)
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <button
      className={classes["heart-button"]}
      

    >
      <img
        src={`${(!isHeartFilled && !isHeartClicked) ? heart : heartFilled}`}
        onClick={clickHandler}
        onMouseEnter={mouseHandler}
        onMouseLeave={mouseHandler}
      />
    </button>
  );
};
