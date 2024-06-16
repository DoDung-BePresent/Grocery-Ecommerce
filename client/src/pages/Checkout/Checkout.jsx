import { Link } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa6";
import Search from "../../components/Search/Search";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import AntBreadcrumb from "../../components/Breadcrumb/Breadcrumb";

const Checkout = () => {
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
      <AntBreadcrumb items={[{ title: "Home" }, { title: "Checkout" }]} />

      {/* Checkout Items */}
      <div className="flex md:flex-row flex-col gap-6 dark:text-gray-300">
        <div className="flex flex-col divide-y-2 px-5 bg-gray-100 dark:bg-gray-900 mt-6 md:w-[70%] rounded-lg">
          {/* Item details */}
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <div className="py-4 md:flex hidden gap-4 items-end">
            <div className="flex items-center gap-2 w-[70%]">
              <FaAngleLeft />
              <Link className="text-black dark:text-gray-300 font-bold" to="/">
                Continue Shopping
              </Link>
            </div>
            <div className="flex flex-col divide-y-2 w-[30%]">
              <div className="pb-4 font-semibold text-sm">
                <div className="flex items-center justify-between">
                  <span>Subtotal:</span>
                  <span>$191.65</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping:</span>
                  <span>$10.00</span>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>$201.65</span>
                </div>
              </div>
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
            <Link
              className="outline-none text-center border-none px-3 py-2 rounded-md bg-yellow-400 dark:text-black w-full"
              to="/checkout/shipping"
            >
              Continue to checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
