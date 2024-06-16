import { Link } from "react-router-dom";
import { Checkbox, ConfigProvider } from "antd";
import { FaAngleLeft } from "react-icons/fa6";
import Search from "../../components/Search/Search";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import AntBreadcrumb from "../../components/Breadcrumb/Breadcrumb";

// React Icons
import { CiSquarePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";

const Shipping = () => {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);
  return (
    <section className="container mx-auto bg-white py-8 px-6 md:px-8 dark:bg-gray-800">
      {/* Search */}
      <div className="md:hidden">
        <Search
          placeholder="Search products"
          bgColor="bg-gray-100"
          margin="mb-6"
          padding="p-3"
          darkMode="dark:bg-gray-900"
        />
      </div>

      {/* Breadcrumb */}
      <AntBreadcrumb
        items={[
          { title: "Home" },
          { title: "Checkout" },
          { title: "Shipping" },
        ]}
      />

      {/* Checkout Items */}
      <div className="flex md:flex-row flex-col gap-6 dark:text-gray-300">
        <div className="flex flex-col px-5 bg-gray-100 dark:bg-gray-900 mt-6 md:w-[70%] rounded-lg">
          {/* Shipping Address */}
          <div className="flex flex-col divide-y-2 divide-black">
            <div>
              <h1 className="md:text-2xl font-bold my-6">
                1. Shipping, arrives between Mon, May 16-Tue, May 24
              </h1>
            </div>
            <div>
              <div className="flex md:flex-row flex-col md:items-center justify-between py-4 gap-4 md:gap-0">
                <div>
                  <h3 className="font-bold md:text-lg">Shipping Address</h3>
                  <p className="text-sm">Where should we deliver your order?</p>
                </div>
                <div>
                  <button className="outline-none border-none flex gap-2 items-center px-3 py-2 rounded-md bg-yellow-400 dark:text-black">
                    <CiSquarePlus className="text-lg" />
                    <span className="font-bold">Add a new address</span>
                  </button>
                </div>
              </div>

              {/* List Address */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="mt-[1px]">
                    <ConfigProvider
                      theme={{
                        token: {
                          colorBgContainer: "transparent",
                          colorBorder: darkModeEnabled ? "#fff" : "#000",
                        },
                      }}
                    >
                      <Checkbox />
                    </ConfigProvider>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <div>
                      <h3 className="font-bold text-lg">Imran Khan</h3>
                      <p className="text-sm">
                        Museum of Rejas, Sylhet Sadar, Sylhet 3100.
                      </p>
                    </div>
                    <div className="flex md:flex-row flex-col md:items-center justify-between text-slate-600 dark:text-slate-400 gap-4 md:gap-0">
                      <div className="text-sm flex md:flex-row flex-col md:items-center md:gap-5">
                        <li>Shipping</li>
                        <li>Delivery from store</li>
                      </div>
                      <div className="flex items-center gap-2 text-black dark:text-slate-400">
                        <CiEdit className="text-xl" />
                        <span>Edit</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-[1px]">
                    <ConfigProvider
                      theme={{
                        token: {
                          colorBgContainer: "transparent",
                          colorBorder: darkModeEnabled ? "#fff" : "#000",
                        },
                      }}
                    >
                      <Checkbox />
                    </ConfigProvider>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <div>
                      <h3 className="font-bold text-lg">Imran Khan</h3>
                      <p className="text-sm">
                        Museum of Rejas, Sylhet Sadar, Sylhet 3100.
                      </p>
                    </div>
                    <div className="flex md:flex-row flex-col md:items-center justify-between text-slate-600 dark:text-slate-400 gap-4 md:gap-0">
                      <div className="text-sm flex md:flex-row flex-col md:items-center md:gap-5">
                        <li>Shipping</li>
                        <li>Delivery from store</li>
                      </div>
                      <div className="flex items-center gap-2 text-black dark:text-slate-400">
                        <CiEdit className="text-xl" />
                        <span>Edit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item details */}
          <h4 className="font-bold py-2 text-lg">Items details</h4>
          <div className="divide-y-2">
            <ItemDetail />
            <ItemDetail />
            <ItemDetail />
          </div>

          <div className="py-4 md:flex hidden gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <FaAngleLeft />
              <Link className="text-black dark:text-gray-300 font-bold" to="/">
                Continue Shopping
              </Link>
            </div>
            <div className="">
              <button className="font-bold outline-none border-none px-3 py-2 rounded-md bg-yellow-400 dark:text-black w-40">
                Continue
              </button>
            </div>
          </div>
        </div>

        <div className="md:mt-6 divide-y-2 p-5 md:w-[30%] h-fit bg-gray-100 dark:bg-gray-900 rounded-lg font-semibold text-sm">
          <div className="flex flex-col gap-2 mb-2">
            <div className="flex items-center justify-between">
              <span>Subtotal (items)</span>
              <span>3</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Price (Total)</span>
              <span>$191.65</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
          </div>
          <div className="pt-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span>Estimated Total</span>
              <span>$201.65</span>
            </div>
          </div>
          <Link className="font-bold md:hidden outline-none border-none px-3 py-2 rounded-md bg-yellow-400 dark:text-black w-full mt-4 block text-center">
            Continue to checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
