import styled from "styled-components";
import { useSelector } from "react-redux";
import { Select, Tabs, ConfigProvider } from "antd";

// React Icons
import { PiStarFill } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { BiCartAlt } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";

import Item4 from "../../assets/images/item-4.png";
import Comment from "../../components/Comment/Comment";

// Styled Components
const SelectWrapper = styled(Select)`
  .ant-select-selector {
    background: transparent !important;
  }

  .ant-select-selection-search,
  .ant-select-arrow {
    color: ${({ $darkModeEnabled }) =>
      $darkModeEnabled ? "white" : "black"} !important;
  }

  .ant-select-selection-placeholder,
  .ant-select-selection-item {
    color: ${({ $darkModeEnabled }) =>
      $darkModeEnabled ? "white" : "black"} !important;
  }
`;

const TabsWrapper = styled(Tabs)`
  .ant-tabs-nav-more {
    display: none;
  }
`;

// Hooks
import useMediaQuery from "../../hook/useMediaQuery/useMediaQuery.js";
import AntBreadcrumb from "../../components/Breadcrumb/Breadcrumb.jsx";
import { Link } from "react-router-dom";
import Label from "../../components/Label/Label.jsx";
import Button from "../../components/Button/Button.jsx";
import { useState } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import Search from "../../components/Search/Search.jsx";

// Tabs content
const items = [
  {
    key: "1",
    label: "Description",
    children: "Content of Description",
  },
  {
    key: "2",
    label: "Features",
    children: "Content of Features",
  },
  {
    key: "3",
    label: "Review (1100)",
    children: <Comment />,
  },
  {
    key: "4",
    label: "Similar Products",
    children: "Content of Similar Products",
  },
];

const Product = () => {
  const isMobile = useMediaQuery(768);
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };
  return (
    <section className="section">
      {/* SEARCH */}
      <div className="md:hidden">
        <Search
          placeholder="Search for item"
          bgColor="dark:bg-dark-1 bg-secondary-1"
          rounded="rounded-lg"
          margin="mb-4"
          padding="py-3"
        />
      </div>

      {/* Breadcrumb */}
      {/* FIXME: The color of the text must be white in dark mode! */}
      <AntBreadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          { title: "Coffee" },
          { title: "Coffee Beans" },
          { title: "LavAzza" },
        ]}
      />
      {/* Product */}
      <div className="flex md:flex-row flex-col md:mt-6 items-center md:dark:bg-transparent dark:bg-dark-1 rounded-lg md:rounded-none mt-4">
        <div className="md:w-[40%] flex justify-center">
          <img src={Item4} alt="" className="w-[90%]" />
        </div>
        <div className="md:w-[60%] p-4 md:p-10 bg-secondary-1 rounded-2xl md:rounded-lg h-fit dark:bg-dark-1 dark:text-dark-s-2">
          <h1 className="md:text-3xl text-lg md:font-bold font-extrabold">
            Coffee Beans - Espresso Arabica and Robusta Beans
          </h1>
          <div className="flex md:flex-row flex-col md:gap-16 md:mt-6 mt-4">
            <div className="flex flex-col gap-5 md:w-[35%]">
              {/* Reviews */}
              <div className="flex items-center font-bold">
                <span className="flex items-center gap-2">
                  <PiStarFill className="text-yellow-400 text-lg" /> (3.5)
                </span>
                <span> 1100 Reviews</span>
              </div>
              {/* Size/Weight */}
              <div>
                <h2 className="font-bold md:text-2xl text-xl mb-4">
                  Size/Weight
                </h2>
                <div className="">
                  <SelectWrapper
                    style={{
                      width: "100%",
                    }}
                    placeholder="Select size"
                    size="large"
                    options={[
                      {
                        value: 200,
                        label: "200g",
                      },
                      {
                        value: 300,
                        label: "300g",
                      },
                      {
                        value: 400,
                        label: "400g",
                      },
                      {
                        value: 500,
                        label: "500g",
                      },
                    ]}
                    $darkModeEnabled={darkModeEnabled}
                  />
                  <div className="flex items-center justify-between my-5">
                    <Label children="Small" bgColor="bg-secondary-2" />
                    <Label children="Medium" bgColor="bg-secondary-2" />
                    <Label children="Large" bgColor="bg-secondary-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[65%]">
              <div className="flex flex-col gap-5">
                <div className="flex gap-2 items-center font-bold">
                  <CgNotes className="text-lg" /> Compare
                </div>
                <div>
                  <div className="flex gap-2 items-center font-bold">
                    <BiCartAlt className="text-lg" /> Delivery
                  </div>
                  <p className="ml-6">From $6 for 1-3 days</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center font-bold">
                    <IoBagCheckOutline className="text-lg" /> Pickup
                  </div>
                  <p className="ml-6">Out of 2 store, today</p>
                </div>
              </div>

              <div className="mt-6 border-2 rounded-lg border-gray-300 p-3">
                <div className="font-bold flex items-center">
                  $500.00{" "}
                  <span className="px-3 bg-green-200 rounded-lg text-green-600 ml-2">
                    + 10%
                  </span>
                </div>
                <div className="md:text-6xl text-4xl font-bold my-6 text-center">
                  $540.00
                </div>
                <div className="flex items-center gap-4">
                  <Button children="Add to cart" padding="py-2" />
                  <button
                    className="p-[10px] border-2 rounded-md outline-primary"
                    onClick={handleLikeToggle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered ? (
                      isLiked ? (
                        <RiHeartFill className="text-xl text-red-500" />
                      ) : (
                        <RiHeartLine className="text-xl text-red-500" />
                      )
                    ) : isLiked ? (
                      <RiHeartFill className="text-xl text-red-500" />
                    ) : (
                      <RiHeartLine className="text-xl" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="mt-4 md:mt-0">
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                itemColor: "rgb(156 163 175)",
                itemHoverColor: darkModeEnabled ? "#fff" : "#000",
                itemSelectedColor: darkModeEnabled ? "#fff" : "#000",
                inkBarColor: darkModeEnabled ? "#fff" : "#000",
                horizontalItemPaddingSM: "10px 5px",
                horizontalItemGutter: isMobile ? 8 : 32,
              },
            },
          }}
        >
          <TabsWrapper
            items={items}
            size={isMobile ? "small" : "large"}
            className="font-semibold"
          />
        </ConfigProvider>
      </div>
    </section>
  );
};

export default Product;
