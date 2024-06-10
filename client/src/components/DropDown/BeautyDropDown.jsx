// Icons
import { IoTriangleSharp } from "react-icons/io5";

import { BiCartAlt } from "react-icons/bi";
import { GiLipstick } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { PiCookingPotLight } from "react-icons/pi";
import { BsAward } from "react-icons/bs";
import { MdOutlineFace4 } from "react-icons/md";

const BeautyDropDown = ({ darkModeEnabled }) => {
  return (
    <div
      className={`z-100 relative ${
        darkModeEnabled ? "bg-gray-900" : "bg-white"
      } mt-12 -ml-[480px] p-6 rounded-2xl flex`}
    >
      <IoTriangleSharp
        className={` ${
          darkModeEnabled ? "text-gray-900" : "text-white"
        } text-5xl absolute -top-6 left-[480px]`}
      />
      <div
        className={`pr-8 ${
          darkModeEnabled ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <div className="">
          <div className="flex items-center gap-4">
            <span className="bg-purple-300 inline-block w-6 h-6 rounded-full relative">
              <BiCartAlt
                className={`absolute -right-2 -bottom-1 text-xl ${
                  darkModeEnabled ? "text-gray-200" : "text-black"
                }`}
              />
            </span>
            <h3
              className={`font-semibold ${
                darkModeEnabled ? "text-gray-200" : "text-black"
              }`}
            >
              Featured Shops
            </h3>
          </div>
          <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
            <a href="#" className="hover:text-blue-600">
              Pickup Today in Beauty
            </a>
            <a href="#" className="hover:text-blue-600">
              BeautySpaceNK
            </a>
            <a href="#" className="hover:text-blue-600">
              Equate Beauty
            </a>
            <a href="#" className="hover:text-blue-600">
              Beauty Deals
            </a>
            <a href="#" className="hover:text-blue-600">
              Walmart Exclusives
            </a>
            <a href="#" className="hover:text-blue-600">
              Luxury Beauty Deals
            </a>
            <a href="#" className="hover:text-blue-600">
              New Arrivals
            </a>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-3">
            <span className="bg-yellow-200 inline-block w-6 h-6 rounded-full relative">
              <GiLipstick
                className={`absolute -right-2 -bottom-1 text-xl ${
                  darkModeEnabled ? "text-gray-200" : "text-black"
                }`}
              />
            </span>
            <h3
              className={`font-semibold ${
                darkModeEnabled ? "text-gray-200" : "text-black"
              }`}
            >
              Trending in Beauty
            </h3>
          </div>
          <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
            <a href="#" className="hover:text-blue-600">
              Trending Beauty Products
            </a>
            <a href="#" className="hover:text-blue-600">
              Celebrate Earth Day
            </a>
            <a href="#" className="hover:text-blue-600">
              Prom-ready Beauty
            </a>
            <a href="#" className="hover:text-blue-600">
              Summer Beauty
            </a>
            <a href="#" className="hover:text-blue-600">
              Travel Size & Minis
            </a>
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-3 px-6 gap-14 ${
          darkModeEnabled ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <div className="">
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-purple-300 inline-block w-6 h-6 rounded relative">
                <FaRegStar
                  className={`absolute -right-2 -bottom-1 text-xl ${
                    darkModeEnabled ? "text-gray-200" : "text-black"
                  }`}
                />
              </span>
              <h3
                className={`font-semibold ${
                  darkModeEnabled ? "text-gray-200" : "text-black"
                }`}
              >
                Featured Brands
              </h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
              <a href="#" className="hover:text-blue-600">
                Shop All
              </a>
              <a href="#" className="hover:text-blue-600">
                New in Bakery
              </a>
              <a href="#" className="hover:text-blue-600">
                Sliced Bread
              </a>
              <a href="#" className="hover:text-blue-600">
                Rolls & Buns
              </a>
              <a href="#" className="hover:text-blue-600">
                Tortillas
              </a>
              <a href="#" className="hover:text-blue-600">
                Breakfast Breads
              </a>
              <a href="#" className="hover:text-blue-600">
                Pies
              </a>
              <a href="#" className="hover:text-blue-600">
                Cookies & Brownies
              </a>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-4">
              <span className="bg-blue-300 inline-block w-6 h-6 rounded relative">
                <PiCookingPotLight
                  className={`absolute -right-2 -bottom-1 text-xl ${
                    darkModeEnabled ? "text-gray-200" : "text-black"
                  }`}
                />
              </span>
              <h3
                className={`font-semibold ${
                  darkModeEnabled ? "text-gray-200" : "text-black"
                }`}
              >
                Wearable Technology
              </h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
              <a href="#" className="hover:text-blue-600">
                Black Owned Beauty
              </a>
              <a href="#" className="hover:text-blue-600">
                LatinX Owned Beauty
              </a>
              <a href="#" className="hover:text-blue-600">
                AAPI Owned Beauty
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4">
            <span className="bg-green-300 inline-block w-6 h-6 rounded-full relative">
              <BsAward
                className={`absolute -right-2 -bottom-1 text-xl ${
                  darkModeEnabled ? "text-gray-200" : "text-black"
                }`}
              />
            </span>
            <h3
              className={`font-semibold ${
                darkModeEnabled ? "text-gray-200" : "text-black"
              }`}
            >
              Premium Beauty
            </h3>
          </div>
          <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
            <a href="#" className="hover:text-blue-600">
              Shop All
            </a>
            <a href="#" className="hover:text-blue-600">
              Hair Color
            </a>
            <a href="#" className="hover:text-blue-600">
              Hair Care
            </a>
            <a href="#" className="hover:text-blue-600">
              Skincare
            </a>
            <a href="#" className="hover:text-blue-600">
              Fragrance
            </a>
            <a href="#" className="hover:text-blue-600">
              Makeup
            </a>
            <a href="#" className="hover:text-blue-600">
              Beauty Tech & Tools
            </a>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4">
            <span className="bg-yellow-300 inline-block w-6 h-6 rounded relative">
              <MdOutlineFace4
                className={`absolute -right-2 -bottom-1 text-xl ${
                  darkModeEnabled ? "text-gray-200" : "text-black"
                }`}
              />
            </span>
            <h3
              className={`font-semibold ${
                darkModeEnabled ? "text-gray-200" : "text-black"
              }`}
            >
              Savings
            </h3>
          </div>
          <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
            <a href="#" className="hover:text-blue-600">
              Shop All
            </a>
            <a href="#" className="hover:text-blue-600">
              Men's Grooming
            </a>
            <a href="#" className="hover:text-blue-600">
              Bath & Body
            </a>
            <a href="#" className="hover:text-blue-600">
              Beauty Tech & Tools
            </a>
            <a href="#" className="hover:text-blue-600">
              Makeup
            </a>
            <a href="#" className="hover:text-blue-600">
              Fragrance
            </a>
            <a href="#" className="hover:text-blue-600">
              Nail Care
            </a>
            <a href="#" className="hover:text-blue-600">
              Hair Color
            </a>
            <a href="#" className="hover:text-blue-600">
              Skincare
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyDropDown;
