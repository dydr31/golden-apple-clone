import { Resources } from "../pages/Resources";
import classes from "./Footer.module.css";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      {/* <Resources/> */}
      <footer className={classes["footer"]}>
        <ul>
          <li>how to find us</li>
          <li>contact us</li>
          <li>return policy</li>
        </ul>
        <ul className={classes["resources"]}>
          this site was made with the help of these resources:
          <li>
            <Link to="/resources">Icons</Link>
            {/* <Link to='/product1'>Icons</Link> */}
          </li>
          <li>
            <a href="https://www.lipsum.com/feed/html">Lorem Ipsum generator</a>
          </li>
        </ul>
      </footer>
    </>
  );
};
