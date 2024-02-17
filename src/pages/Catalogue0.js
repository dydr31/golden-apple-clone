import { Footer } from "../components/Footer";
import { Item } from "../components/Item";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { ItemsPageTemplate } from "../components/ItemsPageTemplate";

export const Catalogue = () => {
  const [list, setList] = useState([]);
  const productList = collection(db, "products");

  const getProductList = async () => {
    try {
      const data = await getDocs(productList);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setList(filteredData);
      // console.log(data.docs[0].data)
      // console.log(filteredData);
    } catch (err) {
      console.error("error");
    }
  };



  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <ItemsPageTemplate>
        {" "}
        {list.map((x) => (
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
      </ItemsPageTemplate>
      <Footer />
    </>
  );
};
