import styled from "styled-components";
import { useSelector } from "react-redux";
import { Breadcrumb, Select, Tabs, ConfigProvider } from "antd";

// React Icons
import { PiStarFill } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { BiCartAlt } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

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
  return (
    <section className="container mx-auto bg-white py-8 px-6 md:px-8 dark:bg-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 px-5 rounded-lg dark:bg-gray-900">
        <ConfigProvider
          theme={{
            components: {
              Breadcrumb: {
                lastItemColor: darkModeEnabled ? "#fff" : "#000",
                separatorColor: darkModeEnabled ? "#fff" : "rgb(156 163 175)",
                separatorMargin: isMobile ? 5 : 15,
              },
            },
          }}
        >
          <Breadcrumb
            className="font-semibold dark:text-gray-400"
            items={[
              { title: "Departments" },
              { title: "Coffee" },
              { title: "Coffee Beans" },
              { title: "LavAzza" },
            ]}
          />
        </ConfigProvider>
      </div>
      {/* Product */}
      <div className="flex md:flex-row flex-col md:mt-2 items-center bg-gray-100 dark:bg-gray-900 md:dark:bg-gray-800 md:bg-white rounded-lg md:rounded-none mt-6">
        <div className="md:w-[40%] p-4 md:p-10">
          <img src={Item4} alt="" className="w-full" />
        </div>
        <div className="md:w-[60%] p-4 md:p-10 bg-gray-100 rounded-2xl md:rounded-lg h-fit dark:bg-gray-900 dark:text-white">
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
                    <span
                      className={`label ${
                        darkModeEnabled
                          ? "bg-slate-600 text-gray-300 hover:bg-slate-800"
                          : "bg-slate-200"
                      }`}
                    >
                      Small
                    </span>
                    <span
                      className={`label ${
                        darkModeEnabled
                          ? "bg-slate-600 text-gray-300 hover:bg-slate-800"
                          : "bg-slate-200"
                      }`}
                    >
                      Medium
                    </span>
                    <span
                      className={`label ${
                        darkModeEnabled
                          ? "bg-slate-600 text-gray-300 hover:bg-slate-800"
                          : "bg-slate-200"
                      }`}
                    >
                      Large
                    </span>
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
                  <button className="outline-none border-none px-3 py-2 rounded-md bg-yellow-400 w-full">
                    Add to cart
                  </button>
                  <button className="outline-none p-2 border-2 rounded-md">
                    <LuHeart className="text-lg" />
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
