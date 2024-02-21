import classes from "./LikesMenu.module.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store";
import { CloseIcon } from "./UI/CloseIcon";
import { Backdrop } from "./UI/Backdrop";
import { Background } from "./UI/Background";
import { collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Item } from "../Item";
import { CartItem } from "./CartItem";

export const LikesMenu = () => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.cart.likes);

  const closeIconHandler = () => {
    dispatch(headerActions.likes());
  };

  const productList = collection(db, "products");

  let [list, setList] = useState([])
  let [arr, setArr] = useState([])

  const getProductList = async () => {
    try {
      const data = await getDocs(productList);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // console.log(data.docs[0].data);
      // console.log(filteredData);
      setList(filteredData)
      filterLikes(filteredData)

      // filteredData.filter(x => x.id == )
    } catch (err) {
      console.error("error");
    }


  };

  

  const filterLikes = (data) => {
    let newArr = []
    for (let i = 0; i < likes.length; i++){
     
      let element = data.find(x => x.id === likes[i]);

      if (element !== undefined) {
        newArr.push(element)
      }
    }
    setArr(newArr)
  }



  useEffect(() => {
    getProductList()
  }, [])


  return (
    <>
      {console.log(arr)}

      <Backdrop onClick={closeIconHandler} />

      <Background>
        <CloseIcon onClick={closeIconHandler} />
        <div>
          <h2 className={classes['likes-header']}>You liked</h2>
          <ul className={classes['likes-ul']}>
          {arr.map((x) => (
          <Item
            id={x.id}
            key={x.id}
            price={x.price}
            title={x.type}
            name={x.scent}
            sale={x.sale}
            new={x.new}
          />
        ))}
          </ul>
        </div>
      </Background>
    </>
  );
};
