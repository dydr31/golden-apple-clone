import { useSelector } from "react-redux";
import classes from "./ItemsPageTemplate.module.css";

export const ItemsPageTemplate = (props) => {

  const disableScrolling = useSelector(state => state.menu.disableScrolling)


  return (
    <>
    {console.log(disableScrolling)}
      <main className={`${classes["catalogue"]} ${disableScrolling ? classes['disableScrolling'] : ''}`}>
        <h3 className={classes["catalogue_header"]}>
          {props.text}
        </h3>
        <ul>{props.children}</ul>
      </main>
      
    </>
  );
};
