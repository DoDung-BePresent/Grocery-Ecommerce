import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// components
import Layout from "./components/Layout/Layout";

// pages
import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Product/Product.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Shipping from "./pages/Shipping/Shipping.jsx";
import Payment from "./pages/Payment/Payment.jsx";
import Favorite from "./pages/Favorite/Favorite.jsx";
import Profile from "./pages/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/checkout/shipping", element: <Shipping /> },
      { path: "/checkout/shipping/payment", element: <Payment /> },
      { path: "/favorite", element: <Favorite /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

const setDarkModeClass = (enabled) => {
  if (enabled) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

function App() {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);

  useEffect(() => {
    setDarkModeClass(darkModeEnabled);
  }, [darkModeEnabled]);

  return <RouterProvider router={router} />;
}

export default App;
