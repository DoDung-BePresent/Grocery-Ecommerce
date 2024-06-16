import Item5 from "../../assets/images/item-5.png";
import styled from "styled-components";
import { Select } from "antd";

// React Icons
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { LuTrash } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);
  return (
    <div className="py-4 flex flex-col divide-y-2 w-full">
      <div className="flex items-start md:items-center py-2">
        <div className="">
          <img src={Item5} alt="" className="md:w-40 w-20" />
        </div>
        <div className="w-[80%] md:w-full flex flex-col gap-3">
          <div className="flex md:flex-row flex-col md:items-center justify-between dark:text-white">
            <h3 className="text-sm font-semibold">
              Coffee Beans - Espresso Arabica and Robusta Beans
            </h3>
            <span className="font-bold text-lg hidden md:block">$47.00</span>
          </div>
          <div className="flex divide-x-2 divide-gray-300 font-semibold">
            <span className="md:px-2 pr-2 text-gray-500">$47.00</span>
            <span className="px-2 text-green-600">In Stock</span>
          </div>
          <div className="flex md:flex-row flex-col md:items-center justify-between">
            <div
              className={`flex md:flex-row flex-col md:items-center ${
                checkout ? "" : "w-full justify-between"
              }`}
            >
              <div className="flex md:flex-row flex-col md:items-center w-fit gap-4">
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
                <div className="flex justify-center items-center gap-2 text-lg p-[3px] px-2 rounded-md md:w-fit border-[1px] dark:text-white">
                  <CiSquareMinus />
                  <span className="text-base">1</span>
                  <CiSquarePlus />
                </div>
                <span className="font-bold text-lg md:hidden dark:text-white">$47.00</span>
              </div>
              <div className="text-gray-500 flex items-center gap-4 mt-2 md:mt-0 dark:text-white">
                <div className="flex items-center gap-2">
                  <LuHeart />
                  <span>Save</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuTrash />
                  <span>Delete</span>
                </div>
              </div>
            </div>
            {checkout && (
              <Link className="outline-none text-center border-none px-3 py-2 rounded-md bg-yellow-400 dark:text-black w-32 font-semibold mt-4 nd:mt-0">
                Check Out
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
