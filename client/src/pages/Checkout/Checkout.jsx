import { Link } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa6";
import Search from "../../components/Search/Search";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import AntBreadcrumb from "../../components/Breadcrumb/Breadcrumb";

import Button from "../../components/Button/Button";

const Checkout = () => {
  return (
    <section className="section">
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
        items={[{ title: <Link to="/">Home</Link> }, { title: "Checkout" }]}
      />

      {/* Checkout Items */}
      <div className="flex md:flex-row flex-col gap-6 dark:text-gray-300">
        <div className="flex flex-col divide-y-2 px-5 bg-secondary-1 dark:bg-dark-1 mt-6 md:w-[70%] rounded-lg">
          {/* Item details */}
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <div className="py-4 md:flex hidden justify-between items-end">
            <div className="flex items-center gap-2 w-fit hover:text-blue-400 transition-colors ease-in-out duration-300">
              <FaAngleLeft />
              <Link
                className="text-black dark:text-gray-300 font-bold hover:text-blue-400 transition-colors ease-in-out duration-300"
                to="/"
              >
                Continue Shopping
              </Link>
            </div>
            <div className="flex flex-col divide-y-2 w-[30%]">
              <div className="pb-4 flex flex-col gap-2 font-semibold text-sm">
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
                <div className="flex items-center justify-between text-lg font-extrabold">
                  <span>Total:</span>
                  <span>$201.65</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-6 divide-y-2 p-5 md:w-[30%] h-fit bg-secondary-1 dark:bg-dark-1 rounded-lg font-semibold text-sm">
          <div className="flex flex-col gap-4 mb-2">
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
            <Button
              children="Continue to checkout"
              to="/checkout/shipping"
              padding="py-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
