import candle from "../pics/candle2.jpg";
import classes from "./PopularItems.module.css";
import { Item } from "./item/Item";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const PopularItems = (props) => {
  const header = useSelector((state) => state.menu);
  const dispatch = useDispatch();


  const itemHandler = () => {

  }
  return (
    <div className={classes["pop-items"]}>
      <h2>popular items</h2>
      <ul className={classes['items-list']}>
        <Item onclick={itemHandler}/>
        <Item/>
        <Item/>
        <Item/>

      </ul>
    </div>
  );
};
