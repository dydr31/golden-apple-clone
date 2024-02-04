import Header from "../components/Header";
import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className={classes["error-message"]}>
          <h2>this page does not exist</h2>
          <p>
            <Link to="/">get back</Link>
          </p>
        </div>
      </main>
    </>
  );
};
