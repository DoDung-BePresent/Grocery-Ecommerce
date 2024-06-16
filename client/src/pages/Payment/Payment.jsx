import Search from "../../components/Search/Search";
import AntBreadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { Checkbox, ConfigProvider } from "antd";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";

import Brand from "../../assets/images/Fedex-logo.png";

const Payment = () => {
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
          { title: "Payment method" },
        ]}
      />

      <div className="flex md:flex-row flex-col gap-6 dark:text-gray-300">
        {/* LEFT */}
        <div className="flex flex-col md:w-[70%]">
          {/* PART1 */}
          <div className="bg-gray-100 dark:bg-gray-900 px-5 pb-5 mt-6 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="md:text-2xl font-bold my-6">
                1. Shipping, arrives between Mon, May 16-Tue, May 24
              </h1>
              <div className="flex items-center gap-2 text-black dark:text-slate-400">
                <CiEdit className="text-xl" />
                <span>Edit</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 px-6 rounded-xl">
                  <div>
                    <h3 className="font-bold md:text-lg">Imran Khan</h3>
                    <p className="text-sm">
                      Museum of Rejas, Sylhet Sadar, Sylhet 3100.
                    </p>
                  </div>
                  <div className="">
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
                </div>

                <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 px-6 rounded-xl">
                  <div>
                    <h3 className="font-bold md:text-lg">Imran Khan</h3>
                    <p className="text-sm">
                      2 items.
                    </p>
                  </div>
                  <h3 className="text-slate-600 dark:text-slate-400 text-sm">View details</h3>
                </div>
              </div>
            </div>
          </div>

          {/* PART2 */}
          <div className="bg-gray-100 dark:bg-gray-900 px-5 pb-5 mt-6 rounded-lg flex flex-col divide-y-2">
            <div className="flex items-center justify-between">
              <h1 className="md:text-2xl font-bold my-6">2. Shipping method</h1>
            </div>
            <div className="">
              <h3 className="font-bold my-6">Available Shipping method</h3>
              <div className="flex flex-col gap-4">
                <div className="flex md:flex-row flex-col gap-3 md:gap-0 items-center justify-between bg-white dark:bg-gray-800 p-3 px-6 rounded-xl">
                  <div className="flex items-start md:items-center gap-4">
                    <div className="rounded-lg mt-2">
                      <img
                        src={Brand}
                        alt=""
                        className="w-16 h-10 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Fedex Delivery</h3>
                      <p className="text-sm">Delivery: 2-3 days work</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold">Free</span>
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
                </div>

                <div className="flex md:flex-row flex-col gap-3 md:gap-0 items-center justify-between bg-white dark:bg-gray-800 p-3 px-6 rounded-xl">
                  <div className="flex items-start md:items-center gap-4">
                    <div className="rounded-lg mt-2">
                      <img
                        src={Brand}
                        alt=""
                        className="w-16 h-10 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Fedex Delivery</h3>
                      <p className="text-sm">Delivery: 2-3 days work</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold">Free</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:mt-6 p-5 md:w-[30%] h-fit bg-gray-100 dark:bg-gray-900 rounded-lg text-sm">
          <div>
            <div>
              <h3 className="font-bold text-xl">Payment details</h3>
              <p>
                Complete your purchase item by providing your payment details
                order
              </p>
            </div>
            <div>
              <div className="my-4">
                <h3 className="font-bold text-base mb-2">Email Address</h3>
                <input
                  placeholder="example@gmail.com"
                  type="email"
                  className="p-2 px-4 border-2 rounded-lg w-full text-base focus:outline-blue-300 dark:bg-transparent"
                />
              </div>

              <div className="my-4">
                <h3 className="font-bold text-base mb-2">Card Holder</h3>
                <input
                  placeholder="example@gmail.com"
                  type="text"
                  className="p-2 px-4 border-2 rounded-lg w-full text-base focus:outline-blue-300 dark:bg-transparent"
                />
              </div>

              <div className="my-4">
                <h3 className="font-bold text-base mb-2">Card Details</h3>
                <input
                  placeholder="example@gmail.com"
                  type="text"
                  className="p-2 px-4 border-2 rounded-lg w-full text-base focus:outline-blue-300 dark:bg-transparent"
                />
              </div>

              <div className="my-4 flex border-2 rounded-lg overflow-hidden">
                <input
                  placeholder="MM/YY"
                  type="text"
                  className="w-[50%] outline-none border-r-2 p-2 px-4 dark:bg-transparent"
                />
                <input
                  placeholder="CVC"
                  type="text"
                  className="w-[50%] outline-none border-none p-2 px-4 dark:bg-transparent"
                />
              </div>
            </div>
          </div>
          <div className="font-semibold">
            <div className="flex flex-col gap-2">
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
            <Link className="font-bold outline-none text-lg border-none px-3 py-2 rounded-md bg-yellow-400 dark:text-black w-full mt-4 block text-center">
              Pay $201.65
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
