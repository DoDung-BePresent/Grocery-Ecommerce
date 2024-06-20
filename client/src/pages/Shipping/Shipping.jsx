import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import Search from "../../components/Search/Search";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import AntBreadcrumb from "../../components/Breadcrumb/Breadcrumb";

// React Icons
import { CiSquarePlus } from "react-icons/ci";
import { useSelector } from "react-redux";
import Address from "../../components/Address/Address";
import Button from "../../components/Button/Button";

const Shipping = () => {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);
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
        items={[
          { title: <Link to="/">Home</Link> },
          { title: "Checkout" },
          { title: "Shipping" },
        ]}
      />

      {/* Checkout Items */}
      <div className="flex md:flex-row flex-col gap-6 dark:text-gray-300">
        <div className="flex flex-col px-5 bg-secondary-1 dark:bg-dark-1 mt-6 md:w-[70%] rounded-lg">
          {/* Shipping Address */}
          <div className="flex flex-col divide-y-2 divide-dark-s-1">
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
                  <Button
                    children={
                      <div className="flex items-center gap-2 justify-center">
                        <CiSquarePlus className="text-lg" />
                        <span className="font-bold">Add a new address</span>
                      </div>
                    }
                    padding="py-2"
                  />
                </div>
              </div>

              {/* List Address */}
              <div className="flex flex-col gap-4">
                <Address
                  darkModeEnabled={darkModeEnabled}
                  title="Imran Khan"
                  des="Museum of Rejas, Sylhet Sadar, Sylhet 3100."
                  status="Shipping"
                  method="Delivery from store"
                />
                <Address
                  darkModeEnabled={darkModeEnabled}
                  title="Imran Khan"
                  des="Museum of Rejas, Sylhet Sadar, Sylhet 3100."
                  status="Shipping"
                  method="Delivery from store"
                />
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
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors ease-in-out duration-300">
              <FaAngleLeft />
              <Link
                className="text-black dark:text-gray-300 font-bold hover:text-blue-400 transition-colors ease-in-out duration-300"
                to="/"
              >
                Continue Shopping
              </Link>
            </div>
            <Button children="Continue" padding="py-2" width="w-40" to="/checkout/shipping/payment" />
          </div>
        </div>

        <div className="md:mt-6 divide-y-2 p-5 md:w-[30%] h-fit bg-secondary-1 dark:bg-dark-1 rounded-lg font-semibold text-sm">
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
            <div className="md:hidden">
              <Button children="Continue to checkout" padding="py-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
