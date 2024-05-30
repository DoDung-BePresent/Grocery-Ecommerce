import { useSelector } from "react-redux";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);
  return (
    <div className={darkModeEnabled ? "dark" : ""}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
