import { Footer } from "../components/Footer";
import { Item } from "../components/Item";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { ItemsPageTemplate } from "../components/ItemsPageTemplate";

export const ItemsOnSale = (props) => {
  const [list, setList] = useState([]);
  const productList = collection(db, "products");

  const getProductList = async () => {
    try {
      const data = await getDocs(productList);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const arr = filteredData.filter(x => x.sale != 0)
      setList(arr);
    } catch (err) {
      console.error("error");
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <ItemsPageTemplate text={'items on sale'}>
        {" "}
        {list.map((x) => (
          <Item
            id={x.id}
            key={x.id}
            price={x.price}
            title={x.type}
            name={x.scent}
            sale={x.sale}
          />
        ))}
      </ItemsPageTemplate>
      <Footer />
    </>
  );
};
