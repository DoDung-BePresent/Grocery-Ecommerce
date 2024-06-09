import { useState } from "react";

// Components
import CollapsedMenu from "../CollapsedMenu/CollapsedMenu";

// Images
import Logo from "../../assets/images/Logo.svg";
import Avatar from "../../assets/images/Avatar.png";

// Icons
import { RiMenu4Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { BiCartAlt } from "react-icons/bi";
import DarkModeToggle from "../ToggleDarkMode/DarkModeToggle";
import GroceryDropDown from "../DropDown/GroceryDropDown";
import BeautyDropDown from "../DropDown/BeautyDropDown";
import DepartmentDropDown from "../DropDown/DepartmentDropDown";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-slate-200 dark:bg-gray-900 flex items-center justify-between container px-5 md:px-10 h-20 sticky top-0 z-10 shadow-md dark:shadow-gray-700">
      {/* Toggle */}
      <div className="md:hidden">
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

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={Logo} alt="Logo" className="w-6 md:w-10" />
        <span className="text-xl md:text-2xl font-extrabold dark:text-white">
          grocerymart
        </span>
      </div>

      {/* Navbar */}
      <nav className="hidden md:flex items-center font-semibold gap-10 dark:text-white">
        <div>
          <span
            id="dropdownHoverButton"
            data-dropdown-toggle="DepartmentDropDown"
            data-dropdown-trigger="hover"
            className="flex items-center gap-2 text-[15px] cursor-pointer py-12"
          >
            Departments <FaAngleDown className="text-sm" />
          </span>
          <DepartmentDropDown id="DepartmentDropDown" />
        </div>
        <div>
          <span
            id="dropdownHoverButton"
            data-dropdown-toggle="GroceryDropDown"
            data-dropdown-trigger="hover"
            className="flex items-center gap-2 text-[15px] cursor-pointer py-12"
          >
            Grocery <FaAngleDown className="text-sm" />
          </span>
          <GroceryDropDown id="GroceryDropDown" />
        </div>
        <div>
          <span
            id="dropdownHoverButton"
            data-dropdown-toggle="BeautyDropDown"
            data-dropdown-trigger="hover"
            className="flex items-center gap-2 text-[15px] cursor-pointer py-12"
          >
            Beauty <FaAngleDown className="text-sm" />
          </span>
          <BeautyDropDown id="BeautyDropDown" />
        </div>
      </nav>

      <div className="flex items-center">
        {/* Search */}
        <div className="hidden md:flex items-center mr-4">
          <input className="hidden" type="text" name="" id="search" />
          <label
            htmlFor="search"
            className="bg-white p-2 rounded-lg inline-block dark:bg-gray-700 dark:text-white"
          >
            <CiSearch className="text-2xl" />
          </label>
        </div>

        {/* Actions */}
        <div className="hidden md:flex bg-white p-[10px] px-4 rounded-lg mr-4 w-[180px] justify-between dark:bg-gray-700 dark:text-white">
          <div className="flex items-center gap-2 border-r-[1px] border-slate-200 justify-center pr-4">
            <LuHeart className="text-xl" />
            <span className="text-sm font-semibold">03</span>
          </div>

          <div className="flex items-center gap-2 justify-center">
            <BiCartAlt className="text-xl" />
            <span className="text-sm font-semibold">$65.42</span>
          </div>
        </div>

        <DarkModeToggle />

        {/* Avatar */}
        <div className="w-10 h-10">
          <img src={Avatar} alt="" className="object-fill" />
        </div>
      </div>
    </header>
  );
};

export default Header;
