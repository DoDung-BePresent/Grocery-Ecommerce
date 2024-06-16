import { Link } from "react-router-dom";
import Item5 from "../../assets/images/item-5.png";

import { IoTriangleSharp } from "react-icons/io5";

const CartDropDown = ({ darkModeEnabled }) => {
  return (
    <div
      className={`absolute z-10 ${
        darkModeEnabled ? "bg-gray-800 text-gray-300" : "bg-white"
      } p-6 w-[35vw] rounded-xl top-10 -right-20`}
    >
      <IoTriangleSharp
        className={`text-lg absolute -top-4 right-24 ${
          darkModeEnabled ? "text-gray-800" : "text-white"
        }`}
      />
      <div className="flex flex-col divide-y gap-4">
        <div>
          <div className="flex justify-between mb-4">
            <h3 className="font-bold text-lg">You have 3 item</h3>
            <Link
              className="font-semibold text-lg text-blue-400"
              to="/checkout"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <div
                className={`${
                  darkModeEnabled ? "bg-gray-900" : "bg-gray-200"
                } my-2`}
              >
                <img src={Item5} alt="" />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <h4
                  className={` font-semibold ${
                    darkModeEnabled ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Lavazza Coffee Blends
                </h4>
                <p className="font-semibold">Price: $329.00</p>
                <p className="font-semibold">Quantity: 1</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                className={`${
                  darkModeEnabled ? "bg-gray-900" : "bg-gray-200"
                } my-2`}
              >
                <img src={Item5} alt="" />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <h4
                  className={` font-semibold ${
                    darkModeEnabled ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Lavazza Coffee Blends
                </h4>
                <p className="font-semibold">Price: $329.00</p>
                <p className="font-semibold">Quantity: 1</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                className={`${
                  darkModeEnabled ? "bg-gray-900" : "bg-gray-200"
                } my-2`}
              >
                <img src={Item5} alt="" />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <h4
                  className={` font-semibold ${
                    darkModeEnabled ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Lavazza Coffee Blends
                </h4>
                <p className="font-semibold">Price: $329.00</p>
                <p className="font-semibold">Quantity: 1</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-4">
            <h1>Subtotal:</h1>
            <span>$415.99</span>
          </div>
          <div className="flex items-center justify-between">
            <h1>Texes:</h1>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between">
            <h1>Shipping:</h1>
            <span>$10.00</span>
          </div>
          <div className="flex items-center justify-between font-bold">
            <h1>Total Price:</h1>
            <span>$425.99</span>
          </div>
        </div>
        <div>
          <button
            className={`outline-none font-semibold border-none px-3 py-2 rounded-md bg-yellow-400 ${
              darkModeEnabled ? "text-white" : ""
            } hover:bg-yellow-500 w-full mt-4`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDropDown;
