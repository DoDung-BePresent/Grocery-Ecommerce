import Item5 from "../../assets/images/item-5.png";
import styled from "styled-components";
import { Select } from "antd";
import Button from "../Button/Button";

// React Icons
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { LuTrash } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

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
const ItemDetail = ({ isCheckout }) => {
  const checkout = isCheckout || false;
  const [quantity, setQuantity] = useState(1);
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);
  return (
    <div className="py-4 flex flex-col divide-y-2 w-full">
      <div className="flex items-start md:items-center py-2">
        <div className="">
          <img src={Item5} alt="" className="md:w-40 w-20" />
        </div>
        <div className="w-[80%] md:w-full flex flex-col gap-3 md:gap-4">
          <div className="flex md:flex-row flex-col md:items-center justify-between dark:text-white">
            <h3 className="text-sm md:text-lg font-medium">
              Coffee Beans - Espresso Arabica and Robusta Beans
            </h3>
            <span className="font-bold text-lg hidden md:block mr-3">
              $47.00
            </span>
          </div>

          <div className="flex divide-x-2 divide-gray-300 font-semibold text-sm">
            <span className="md:px-2 pr-2 text-dark-s-1">$47.00</span>
            <span className="px-2 text-green-600">In Stock</span>
          </div>

          <div className="flex md:flex-row flex-col md:items-center justify-between">
            <div
              className={`flex md:flex-row flex-col md:items-center ${
                checkout ? "" : "w-full justify-between"
              }`}
            >
              <div className="flex md:flex-row flex-col md:items-center w-fit gap-2 md:gap-4">
                <div>
                  <SelectWrapper
                    style={{
                      width: "100%",
                    }}
                    size="middle"
                    placeholder="Select size"
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
                </div>
                <div className="flex justify-center items-center gap-2 text-lg p-[3px] px-2 rounded-md md:w-fit border-[1px] dark:text-white outline-primary">
                  <CiSquareMinus
                    className="hover:text-dark-s-1 transition-colors ease-in-out duration-300"
                    onClick={() => setQuantity(quantity - 1)}
                  />
                  <span className="text-base">{quantity}</span>
                  <CiSquarePlus
                    className="hover:text-dark-s-1 transition-colors ease-in-out duration-300"
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </div>
                <span className="font-bold mt-2 md:mt-0 text-lg md:hidden dark:text-white">
                  $47.00
                </span>
              </div>
              <div className="text-dark-2 flex items-center justify-end md:justify-between gap-2 md:gap-4 my-2 md:my-0 md:ml-4 dark:text-white">
                <div className="flex items-center gap-2 hover:bg-green-400 hover:text-white transition-colors ease-in-out duration-300 p-1 px-3 rounded-md">
                  <LuHeart />
                  <span>Save</span>
                </div>
                <div className="flex items-center gap-2 hover:bg-red-400 hover:text-white transition-colors ease-in-out duration-300 p-1 px-3 rounded-md">
                  <LuTrash />
                  <span>Delete</span>
                </div>
              </div>
            </div>
            <div className="mx-auto md:mx-0">
              {checkout && (
                <Button
                  children="Check Out"
                  width="w-fit"
                  padding="py-2 px-6 my-0"
                  to="/checkout"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
