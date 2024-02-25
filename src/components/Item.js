import classes from "./Item.module.css";
import candle from "../pics/candle.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../store";
import { Link } from "react-router-dom";
import { SaleBadge } from "./UI/Item-Badges/SaleBadge";
import { AddToCartButton } from "./UI/AddToCartHoverButton";
import { cartActions } from "../store/cartSlice";
import { sendCartData, sendLikesData } from "../store/cart-actions";
import { HeartHoverButton } from "./UI/HeartHoverButton";
import { NewBadge } from "./UI/Item-Badges/NewBadge";

export const Item = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const itemHandler = () => {
    dispatch(headerActions.showItem());
  };

  let hide = false;
  let totalPrice = ((100 - props.sale) * props.price) / 100;
  if (props.sale != 0) {
    hide = true;
  }

  let link = "/product/" + props.id.toString();

  const [showHoverButton, setShowHoverButton] = useState(false);

  const hoverHandler = () => {
    setShowHoverButton(!showHoverButton);
  };

  //HERE

  useEffect(() => {
   if(localStorage.getItem('Log In' === true)){ sendCartData(cart);}
  }, [cart]);

  let name = props.name;
  name = name.toUpperCase()

  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        price: props.price,
        sale: props.sale,
        name: props.name,
        title: props.title,
      })
    );
  };

  const heartHandler = (data) => {

    if(data === true){
    dispatch(cartActions.addToLikes(props.id))}
    else {
      dispatch(cartActions.removeFromLikes(props.id))
    }
  }



  let wasLiked = false
  let a = cart.likes.find(x => x === props.id)
  if(a != undefined){
    wasLiked = true
  }
  


  return (
    <>
      <li
        className={classes["item"]}
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        
        <div className={classes['heart']}><HeartHoverButton on={heartHandler}
        wasLiked={wasLiked}/></div>
        
        <div className={classes['badges']}>
        <NewBadge new={props.new}/>
        <SaleBadge sale={props.sale} />
        
        </div>
        

        <Link to={link}>
          <img
            src={candle}
            className={classes["item-picture"]}
            onClick={itemHandler}
          />
        </Link>

        <div
          className={`${!showHoverButton ? classes.hide : ""} ${classes.plus}`}
        >
          {<AddToCartButton onClick={addItemToCart} />}
        </div>

        <label>
          <div>
            <p className={classes["title"]}>{props.title}</p>
            <p className={classes["name"]}>{name}</p>
            <div className={classes["price-section"]}>
              <p className={classes["price"]}>${totalPrice}</p>
              {hide && (
                <p className={classes["before-price"]}>${props.price}</p>
              )}
            </div>
          </div>
        </label>
      </li>
    </>
  );
};
