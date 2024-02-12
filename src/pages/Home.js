import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Main } from "../components/Main";
import { PopularItems } from "../components/PopularItems";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Header-Components/Menu";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
export const Home = () => {
  const menu = useSelector((state) => state.menu);

  return (
    <>
      <main>
        {menu.menu && <Menu />}
        <AnimatePresence>
          <Main />
        </AnimatePresence>
        {/* <PopularItems /> */}
        <Footer />
      </main>
    </>
  );
};
