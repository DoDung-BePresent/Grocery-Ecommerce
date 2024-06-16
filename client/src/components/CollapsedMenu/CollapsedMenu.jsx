// React Icons
import { LuHeart } from "react-icons/lu";
import { BiCartAlt } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";

// Icons
import TVLightIcon1 from "../../assets/icons/TV-LightIcon-1.svg";
import TVDarkIcon1 from "../../assets/icons/TV-DarkIcon-1.svg";
import TVLightIcon2 from "../../assets/icons/TV-LightIcon-2.svg";
import TVDarkIcon2 from "../../assets/icons/TV-DarkIcon-2.svg";
import CartLightIcon1 from "../../assets/icons/Cart-LightIcon-1.svg";
import CartDarkIcon1 from "../../assets/icons/Cart-DarkIcon-1.svg";
import CartLightIcon2 from "../../assets/icons/Cart-LightIcon-2.svg";
import CartDarkIcon2 from "../../assets/icons/Cart-DarkIcon-2.svg";
import BeautyLightIcon from "../../assets/icons/Beauty-LightIcon.svg";
import BeautyDarkIcon from "../../assets/icons/Beauty-DarkIcon.svg";

// AntDesign
import { Menu } from "antd";

// Styled Components
import styled from "styled-components";

// Selector
import { useSelector } from "react-redux";

// MenuWarpper
const MenuWrapper = styled(Menu)`
  &.ant-menu-light.ant-menu-root.ant-menu-inline {
    border-inline-end: 0 !important;
  }

  &.ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline {
    background: transparent !important;
  }

  &.ant-menu.ant-menu-root.ant-menu-inline {
    background-color: ${(props) =>
      props.$darkModeEnabled ? "#171C28" : "#fff"} !important;
    color: ${(props) =>
      props.$darkModeEnabled ? "#fff" : "#171C28"} !important;
  }

  &.ant-menu-light.ant-menu-root.ant-menu-inline .ant-menu-item,
  &.ant-menu-light.ant-menu-root.ant-menu-inline .ant-menu-submenu-title,
  &.ant-menu-light.ant-menu-root.ant-menu-inline
    .ant-menu.ant-menu-sub.ant-menu-inline
    .ant-menu-item-group-title
    span {
    color: ${(props) =>
      props.$darkModeEnabled ? "#9E9DA8" : "#000"} !important;
  }

  .ant-menu-item.ant-menu-item-active.ant-menu-item-selected.ant-menu-item-only-child {
    color: ${(props) =>
      props.$darkModeEnabled ? "#000" : "#9E9DA8"} !important;
  }

  .ant-menu.ant-menu-sub.ant-menu-inline > li,
  .ant-menu-submenu-title {
    padding-left: 11px !important;
  }

  &.ant-menu.ant-menu-root.ant-menu-inline
    > li.ant-menu-submenu
    > ul.ant-menu-sub.ant-menu-inline
    > li[role="none"] {
    padding-left: 0 !important;
  }

  li[role="presentation"] > div[role="presentation"] {
    padding-left: 5px !important;
  }

  li[role="presentation"] > ul[role="group"] > li {
    padding-left: 47px !important;
  }
`;

const CollapsedMenu = ({ showMenu, handleShowMenu }) => {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);

  const items = [
    {
      key: "1",
      label: <span className="font-semibold text-base">Departments</span>,
      children: [
        {
          key: "2",
          label: "Savings & Featured Shops",
        },
        {
          key: "3",
          label: <span className="font-semibold">Electronics</span>,
          children: [
            {
              key: "4",
              label: (
                <div className="flex items-center gap-2">
                  {darkModeEnabled ? (
                    <img src={TVDarkIcon1} />
                  ) : (
                    <img src={TVLightIcon1} />
                  )}
                  <span className="text-lg font-semibold text-black">
                    TV & Video
                  </span>
                </div>
              ),
              type: "group",
              children: [
                {
                  key: "5",
                  label: "Shop all TVs",
                },
                {
                  key: "6",
                  label: "TVs by Size",
                },
                {
                  key: "7",
                  label: "Smart TVs",
                },
                {
                  key: "8",
                  label: "Roku TVs",
                },
                {
                  key: "9",
                  label: "Streaming",
                },
                {
                  key: "10",
                  label: "TV Mounts & Accessories",
                },
                {
                  key: "11",
                  label: "DVD & Blu-ray Players",
                },
              ],
            },

            {
              key: "12",
              label: (
                <div className="flex items-center gap-2">
                  {darkModeEnabled ? (
                    <img src={TVDarkIcon2} />
                  ) : (
                    <img src={TVLightIcon2} />
                  )}
                  <span className="text-lg font-semibold text-black">
                    Wearable Technology
                  </span>
                </div>
              ),
              type: "group",
              children: [
                {
                  key: "13",
                  label: "Galaxy Watch",
                },
                {
                  key: "14",
                  label: "Apple Watch",
                },
                {
                  key: "15",
                  label: "Fitness Trackers",
                },
                {
                  key: "16",
                  label: "Virtual Reality",
                },
                {
                  key: "17",
                  label: "Headphones",
                },
              ],
            },
          ],
        },

        {
          key: "18",
          label: "Clothing, Shoes & Accessories",
        },
        {
          key: "19",
          label: "Home, Furniture & Appliances",
        },
        {
          key: "20",
          label: "Toys & Video Games",
        },
        {
          key: "21",
          label: "Home Improvement",
        },
        {
          key: "22",
          label: "Baby",
        },
        {
          key: "23",
          label: "Household Essentials",
        },
        {
          key: "24",
          label: "Personal Care",
        },
        {
          key: "25",
          label: "Patio & Garden",
        },
        {
          key: "26",
          label: "Sports & Outdoors",
        },
        {
          key: "27",
          label: "Gift Cards",
        },
        {
          key: "28",
          label: "Auto, Tires and Industrial",
        },
        {
          key: "29",
          label: "Movies, Music & Books",
        },
      ],
    },
    {
      key: "30",
      label: <span className="font-semibold text-base">Grocery</span>,
      children: [
        {
          key: "31",
          label: (
            <div className="flex items-center gap-2">
              {darkModeEnabled ? (
                <img src={CartDarkIcon1} />
              ) : (
                <img src={CartLightIcon1} />
              )}
              <span className="text-lg font-semibold text-black">Grocery</span>
            </div>
          ),
          type: "group",
          children: [
            {
              key: "32",
              label: "Shop All",
            },
            {
              key: "33",
              label: "Grilling & Foods",
            },
            {
              key: "34",
              label: "Spring Flavor",
            },
          ],
        },
        {
          key: "35",
          label: (
            <div className="flex items-center gap-2">
              {darkModeEnabled ? (
                <img src={CartDarkIcon2} />
              ) : (
                <img src={CartLightIcon2} />
              )}
              <span className="text-lg font-semibold text-black">
                Fresh Produce
              </span>
            </div>
          ),
          type: "group",
          children: [
            {
              key: "36",
              label: "Shop All",
            },
            {
              key: "37",
              label: "Celebrate Salad Month",
            },
            {
              key: "38",
              label: "Healthy Living",
            },
            {
              key: "39",
              label: "Fresh Fruit",
            },
            {
              key: "40",
              label: "Salad Kits & Bowls",
            },
            {
              key: "41",
              label: "Organic Produce",
            },
            {
              key: "42",
              label: "Fresh Vegetables",
            },
          ],
        },
      ],
    },
    {
      key: "43",
      label: <span className="font-semibold text-base">Beauty</span>,
      children: [
        {
          key: "44",
          label: (
            <div className="flex items-center gap-2">
              {darkModeEnabled ? (
                <img src={CartDarkIcon1} />
              ) : (
                <img src={CartLightIcon1} />
              )}
              <span className="text-lg font-semibold text-black">
                Featured Shops
              </span>
            </div>
          ),
          type: "group",
          children: [
            {
              key: "45",
              label: "Pickup today in beauty",
            },
            {
              key: "46",
              label: "BeautySpaceNK",
            },
            {
              key: "47",
              label: "Equate Beauty",
            },
            {
              key: "48",
              label: "Beauty Deals",
            },
            {
              key: "49",
              label: "Walmart Exclusives",
            },
            {
              key: "50",
              label: "Luxury Beauty Deals",
            },
            {
              key: "51",
              label: "New Arrivals",
            },
          ],
        },
        {
          key: "52",
          label: (
            <div className="flex items-center gap-2">
              {darkModeEnabled ? (
                <img src={BeautyDarkIcon} />
              ) : (
                <img src={BeautyLightIcon} />
              )}
              <span className="text-lg font-semibold text-black">
                Trending in Beauty
              </span>
            </div>
          ),
          type: "group",
          children: [
            {
              key: "53",
              label: "Trending Beauty Products",
            },
            {
              key: "54",
              label: "Celebrate Earth Day",
            },
            {
              key: "55",
              label: "From-ready Beauty",
            },
            {
              key: "56",
              label: "Summer Beauty",
            },
            {
              key: "57",
              label: "Travel Size & Minis",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {/* Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black dark:bg-transparent opacity-50"
          onClick={handleShowMenu}
        />
      )}
      {/* Menu */}
      <div
        className={`bg-white absolute top-0 left-0 ${
          showMenu ? "" : "-translate-x-full"
        } w-[85%] p-4 py-6 h-screen overflow-scroll custom-scrollbar dark:bg-dark-1 dark:text-dark-s-1 ease-in duration-300`}
      >
        <FaArrowLeftLong
          className="mb-3 ml-3 text-lg p-1 w-6 h-6 outline-primary rounded-md"
          onClick={handleShowMenu}
        />
        <div className="flex flex-col gap-2 px-3 pr-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BiCartAlt className="text-xl" />
              <span>Cart</span>
            </div>
            <span className="font-bold">3</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LuHeart className="text-xl" />
              <span>Favorite</span>
            </div>
            <span className="font-bold">3</span>
          </div>
        </div>
        <MenuWrapper
          $darkModeEnabled={darkModeEnabled}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
    </div>
  );
};

export default CollapsedMenu;
