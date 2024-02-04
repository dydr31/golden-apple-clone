import classes from "./Resources.module.css";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export const Resources = () => {
  return (
    <>
      {/* <div className={classes["black-background"]}></div> */}
      <div className={classes["resources-page"]}>
        <h3>List of icons that were used in the making of this website</h3>
        <ul>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/heart"
              title="heart icons"
            >
              Heart icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/candle"
              title="candle icons"
            >
              Candle icons created by Becris - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/add" title="add icons">
              Add icons created by Pixel perfect - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/explosion"
              title="explosion icons"
            >
              Explosion icons created by Smashicons - Flaticon
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};
