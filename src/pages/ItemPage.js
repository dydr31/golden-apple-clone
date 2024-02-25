import classes from "./ItemPage.module.css";
import pic from "../pics/candle2.jpg";
import heart from "../pics/heart.png";
import heartBlack from "../pics/heart(1).png";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { db } from "../config/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SaleBadge } from "../components/UI/Item-Badges/SaleBadge";
import { cartActions } from "../store/cartSlice";

export const ItemMenu = () => {
  const params = useParams();
  const docRef = doc(db, "products", params.productId);

  const [itemData, setItemData] = useState([]);

  const getDocSnap = async () => {
    try {
      const docSnap = await getDoc(docRef);
      setItemData(docSnap.data());
    } catch (err) {
      console.error("error");
    }
  };

  useEffect(() => {
    getDocSnap();
  }, []);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let a = cart.likes.find((x) => x === params.productId);
  let isHeartInitiallyFilled = false;
  if (a != undefined) {
    isHeartInitiallyFilled = true;
  }

  const [isHeartFilled, setIsHeartFilled] = useState(isHeartInitiallyFilled);

  const heartHandler = () => {
    if (isHeartFilled === false) {
      dispatch(cartActions.addToLikes(params.productId));
    } else if (isHeartFilled === true) {
      dispatch(cartActions.removeFromLikes(params.productId));
    }
    setIsHeartFilled(!isHeartFilled);
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: params.productId,
        price: itemData.price,
        sale: itemData.sale,
        name: itemData.scent,
      })
    );
  };

  return (
    <>
      {console.log(cart.likes)}

      <div className={classes["item-menu"]}>
        <div>
          <p className={classes["nav-text"]}>
            catalogue/<Link to="/catalogue0">scented candles</Link>
          </p>
          <div className={classes["item-menu-content"]}>
            <div>
              <div className={classes['badges']}>
                <SaleBadge sale={itemData.sale} />
              </div>

              <img src={pic} />
            </div>

            <div className={classes["item-content"]}>
              <p className={classes["grey-text"]}>scented {itemData.type}</p>

              <p className={classes["name"]}>{itemData.scent}</p>
              <p className={classes["price"]}> ${itemData.price}</p>

              <p className={classes["description"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                est augue, eleifend sit amet fringilla id, sagittis eu eros.
                Suspendisse tincidunt maximus metus, sed vulputate dui. Morbi at
                odio id magna porta mattis. Sed porta, diam ac dapibus pharetra,
                ante magna lacinia massa, in tristique nibh sapien ac odio.
                Vivamus non elit nec neque sagittis auctor ut eu odio. Sed nec
                lectus molestie, finibus lectus vitae, lacinia eros. Nunc
                euismod mi vel tincidunt tristique. Etiam venenatis dolor sed
                leo rhoncus, eget molestie sem condimentum. Fusce et ultrices
                magna. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Donec eget quam eget
                sapien vulputate pharetra. Nunc lobortis sem in suscipit
                tincidunt.{" "}
              </p>

              <div className={classes["buttons"]}>
                <button className={classes["buttons_add"]} onClick={addToCart}>
                  add to cart
                </button>
                <button onClick={heartHandler}>
                  {!isHeartFilled && <img src={heart} />}
                  {isHeartFilled && <img src={heartBlack} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
