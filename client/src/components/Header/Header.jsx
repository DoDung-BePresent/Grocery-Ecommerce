import { useSelector } from "react-redux";
import { useState } from "react";

// Components
import CollapsedMenu from "../CollapsedMenu/CollapsedMenu";
import CartDropDown from "../DropDown/CartDropDown";
import Search from "../Search/Search";

// Images
import Logo from "../../assets/images/Logo.svg";
import Avatar from "../../assets/images/Avatar.png";

// Icons
import { RiMenu4Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { BiCartAlt } from "react-icons/bi";
import DarkModeToggle from "../ToggleDarkMode/DarkModeToggle";
import GroceryDropDown from "../DropDown/GroceryDropDown";
import BeautyDropDown from "../DropDown/BeautyDropDown";
import DepartmentDropDown from "../DropDown/DepartmentDropDown";

// Ant Design Components
import { Dropdown, Space } from "antd";
import Action from "../Action/Action";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);

  return (
    <header className="bg-secondary-2 dark:bg-dark-1 shadow-md flex items-center justify-between container px-5 md:px-10 h-20 sticky top-0 z-10">
      {/* Toggle */}
      <div className="md:hidden outline-primary p-1 rounded-md">
        <RiMenu4Fill
          className="dark:text-white text-2xl text-black"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {/* Collapsed Menu */}
      <CollapsedMenu
        showMenu={showMenu}
        handleShowMenu={() => setShowMenu(!showMenu)}
      />

      <div className="flex items-center gap-40">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-6 md:w-8" />
          <span className="text-xl md:text-2xl font-extrabold dark:text-white">
            grocerymart
          </span>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex items-center font-semibold gap-10 dark:text-white">
          <Dropdown
            overlay={<DepartmentDropDown darkModeEnabled={darkModeEnabled} />}
            trigger={["hover"]}
          >
            <Space className="text-sm hover:text-blue-500 transition-colors ease-in-out duration-300 group">
              Departments <FaAngleDown className="group-hover" />
            </Space>
          </Dropdown>

          <Dropdown
            overlay={<GroceryDropDown darkModeEnabled={darkModeEnabled} />}
            trigger={["hover"]}
          >
            <Space className="text-sm hover:text-blue-500 transition-colors ease-in-out duration-300 group">
              Grocery <FaAngleDown className="group-hover" />
            </Space>
          </Dropdown>

          <Dropdown
            overlay={<BeautyDropDown darkModeEnabled={darkModeEnabled} />}
            trigger={["hover"]}
          >
            <Space className="text-sm hover:text-blue-500 transition-colors ease-in-out duration-300 group">
              Beauty <FaAngleDown className="group-hover" />
            </Space>
          </Dropdown>
        </nav>
      </div>

      <div className="flex items-center">
        {/* Search */}
        <div className="hidden md:block mr-4">
          <Search />
        </div>

        {/* Actions */}
        {/* FIXME: Lỗi không thể dùng dropdown */}
        <Action />

        <DarkModeToggle />

        {/* Avatar */}
        <div className="w-10 h-10 outline-primary rounded-md hover:outline-blue-300">
          <img src={Avatar} alt="" className="object-fill" />
        </div>
      </div>
    </header>
  );
};

export default Header;
