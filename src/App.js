import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Resources } from "./pages/Resources";
import { ItemMenu } from "./pages/ItemPage";
import { Home } from "./pages/Home";
import { Catalogue } from "./pages/Catalogue0";
import Header from "./components/Header";
import { ErrorPage } from "./pages/ErrorPage";
import { ItemsOnSale } from "./pages/ItemsOnSale";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/resources", element: <Resources /> },
      { path: "/product/:productId", element: <ItemMenu /> },
      { path: "/catalogue0", element: <Catalogue /> },
      { path: '/on-sale', element: <ItemsOnSale/>}
    ],
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
