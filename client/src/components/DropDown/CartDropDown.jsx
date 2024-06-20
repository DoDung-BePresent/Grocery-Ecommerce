import { Link } from "react-router-dom";
import Item5 from "../../assets/images/item-5.png";

import { IoTriangleSharp } from "react-icons/io5";
import Button from "../Button/Button";

const CartDropDown = () => {
  return (
    <div className="absolute z-10 dark:bg-dark-2 dark:text-dark-s-1 bg-white p-6 w-[35vw] rounded-xl top-5 -right-4 shadow-custom">
      <IoTriangleSharp className="text-lg absolute -top-4 right-24 dark:text-dark-2 text-white" />
      <div className="flex flex-col divide-y gap-4">
        <div>
          <div className="flex justify-between mb-4">
            <h3 className="font-bold text-lg">You have 3 item</h3>
            <Link
              className="font-md text-lg text-blue-400 hover:text-blue-600 transition-colors duration-100 ease-in-out"
              to="/favorite"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col outline-primary p-1 rounded-md">
              <div className="dark:bg-gray-900 bg-dark-s-3">
                <img src={Item5} alt="" />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <h4 className="font-normal text-sm dark:text-dark-s-2 text-gray-700 mt-2">
                  Lavazza Coffee Blends
                </h4>
                <p className="font-semibold">Price: $329.00</p>
                <p className="font-semibold">Quantity: 1</p>
              </div>
            </div>

            <div className="flex flex-col outline-primary p-1 rounded-md">
              <div className="dark:bg-gray-900 bg-dark-s-3">
                <img src={Item5} alt="" />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <h4 className="font-normal text-sm dark:text-dark-s-2 text-gray-700 mt-2">
                  Lavazza Coffee Blends
                </h4>
                <p className="font-semibold">Price: $329.00</p>
                <p className="font-semibold">Quantity: 1</p>
              </div>
            </div>

            <div className="flex flex-col outline-primary p-1 rounded-md">
              <div className="dark:bg-gray-900 bg-dark-s-3">
                <img src={Item5} alt="" />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <h4 className="font-normal text-sm dark:text-dark-s-2 text-gray-700 mt-2">
                  Lavazza Coffee Blends
                </h4>
                <p className="font-semibold">Price: $329.00</p>
                <p className="font-semibold">Quantity: 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-md">
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
          <Button to="/checkout" children="Check Out All" padding="py-2" textSize="text-[17px]" />
        </div>
      </div>
    </div>
  );
};

export default CartDropDown;
