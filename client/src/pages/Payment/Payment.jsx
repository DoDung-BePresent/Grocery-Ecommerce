import Search from "../../components/Search/Search";
import AntBreadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { Checkbox, ConfigProvider } from "antd";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";

import Brand from "../../assets/images/Fedex-logo.png";
import Shipping from "../../components/Shipping/Shipping";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Payment = () => {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);

  return (
    <section className="container mx-auto bg-white py-8 px-6 md:px-8 dark:bg-dark-2">
      {/* Search */}
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
      <AntBreadcrumb
        items={[
          { title: <Link to="/">Home</Link> },
          { title: "Checkout" },
          { title: "Shipping" },
          { title: "Payment method" },
        ]}
      />

      <div className="flex md:flex-row flex-col gap-6 dark:text-gray-300">
        {/* LEFT */}
        <div className="flex flex-col md:w-[70%]">
          {/* PART1 */}
          <div className="bg-secondary-1 dark:bg-dark-1 px-5 pb-5 mt-6 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-sm md:text-xl font-bold my-6 dark:text-dark-s-2 pr-3">
                1. Shipping, arrives between Mon, May 16-Tue, May 24
              </h1>
              <div className="flex items-center gap-2 text-dark-2 dark:text-dark-s-2 hover:text-blue-400 transition-colors ease-in-out duration-300">
                <CiEdit className="text-xl" />
                <span>Edit</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between bg-white dark:bg-dark-2 p-3 px-6 rounded-xl">
                  <div className="pr-3">
                    <h3 className="font-bold text-sm md:text-md">Imran Khan</h3>
                    <p className="text-xs">
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

                <div className="flex items-center justify-between bg-white dark:bg-dark-2 p-3 px-6 rounded-xl">
                  <div>
                    <h3 className="font-bold text-sm md:text-md">Imran Khan</h3>
                    <p className="text-xs">2 items.</p>
                  </div>
                  <h3 className="text-dark-2 dark:text-dark-s-2 hover:text-blue-400 transition-colors ease-in-out duration-300 text-sm">
                    View details
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* PART2 */}
          <div className="bg-secondary-1 dark:bg-dark-1 px-5 pb-5 mt-6 rounded-lg flex flex-col divide-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-sm md:text-xl font-bold my-5 md:my-6">
                2. Shipping method
              </h1>
            </div>
            <div className="">
              <h3 className="font-bold text-sm my-6">
                Available Shipping method
              </h3>
              <div className="flex flex-col gap-4">
                <Shipping
                  image={Brand}
                  name="Fedex Delivery"
                  shipTime="2-3 days work"
                  price="Free"
                  darkModeEnabled={darkModeEnabled}
                />
                <Shipping
                  image={Brand}
                  name="Fedex Delivery"
                  shipTime="2-3 days work"
                  price="Free"
                  darkModeEnabled={darkModeEnabled}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:mt-6 p-5 md:w-[30%] h-fit bg-secondary-1 dark:bg-dark-1 rounded-lg text-sm">
          <div>
            <div className="mb-4">
              <h3 className="font-bold text-md md:text-xl">Payment details</h3>
              <p className="my-2">
                Complete your purchase item by providing your payment details
                order
              </p>
            </div>
            <div>
              <div className="my-2">
                <h3 className="font-bold text-sm">Email Address</h3>
                <Input placeholder="example@gmail.com" />
              </div>

              <div className="my-2">
                <h3 className="font-bold text-sm">Card Holder</h3>
                <Input placeholder="Your Name" />
              </div>

              <div className="my-2">
                <h3 className="font-bold text-sm">Card Details</h3>
                <Input placeholder="**** **** **** ****" />
              </div>

              <div className="my-2 mb-6 flex border-2 rounded-lg overflow-hidden outline-primary">
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
          <div className="font-semibold divide-y-2">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span>Subtotal (items)</span>
                <span>3</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Price (Total)</span>
                <span>$191.65</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
            </div>
            <div className="py-4">
              <div className="flex items-center justify-between">
                <span>Estimated Total</span>
                <span>$201.65</span>
              </div>
            </div>
          </div>
          <Button children="Pay $201.65" padding="py-2" textSize="text-lg" />
        </div>
      </div>
    </section>
  );
};

export default Payment;
