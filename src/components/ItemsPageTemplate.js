import { Footer } from "../components/Footer";
import classes from "./ItemsPageTemplate.module.css";

export const ItemsPageTemplate = (props) => {
  return (
    <>
      <main className={classes["catalogue"]}>
        <h3 className={classes["catalogue_header"]}>
          {props.text}
        </h3>
        <ul>{props.children}</ul>
      </main>
      
    </>
  );
};
