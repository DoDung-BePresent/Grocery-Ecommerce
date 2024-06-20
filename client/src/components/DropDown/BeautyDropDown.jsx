// Icons
import { IoTriangleSharp } from "react-icons/io5";

import { BiCartAlt } from "react-icons/bi";
import { GiLipstick } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { PiCookingPotLight } from "react-icons/pi";
import { BsAward } from "react-icons/bs";
import { MdOutlineFace4 } from "react-icons/md";

const BeautyDropDown = () => {
  return (
    <div className="z-100 relative mt-12 -ml-[480px] p-6 rounded-2xl flex bg-white dark:bg-dark-1 dark:text-dark-s-2 shadow-custom">
      <IoTriangleSharp className="text-5xl absolute -top-6 left-[480px] text-white dark:text-dark-1" />
      <div className="grid grid-cols-[16vw_45vw]">
        <div className="pr-8">
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-purple-300 inline-block w-6 h-6 rounded-full relative">
                <BiCartAlt className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="font-semibold">Featured Shops</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Pickup Today in Beauty
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                BeautySpaceNK
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Equate Beauty
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Beauty Deals
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Walmart Exclusives
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Luxury Beauty Deals
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                New Arrivals
              </a>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <span className="bg-yellow-200 inline-block w-6 h-6 rounded-full relative">
                <GiLipstick className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="font-semibold">Trending in Beauty</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Trending Beauty Products
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Celebrate Earth Day
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Prom-ready Beauty
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Summer Beauty
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Travel Size & Minis
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 px-6 gap-14">
          <div className="">
            <div className="">
              <div className="flex items-center gap-4">
                <span className="bg-purple-300 inline-block w-6 h-6 rounded relative">
                  <FaRegStar className="absolute -right-2 -bottom-1 text-xl" />
                </span>
                <h3 className="font-semibold">Featured Brands</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Shop All
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  New in Bakery
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Sliced Bread
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Rolls & Buns
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Tortillas
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Breakfast Breads
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Pies
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Cookies & Brownies
                </a>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-4">
                <span className="bg-blue-300 inline-block w-6 h-6 rounded relative">
                  <PiCookingPotLight className="absolute -right-2 -bottom-1 text-xl" />
                </span>
                <h3 className="font-semibold">Wearable Technology</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Black Owned Beauty
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  LatinX Owned Beauty
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  AAPI Owned Beauty
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-green-300 inline-block w-6 h-6 rounded-full relative">
                <BsAward className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="font-semibold">Premium Beauty</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Shop All
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Hair Color
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Hair Care
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Skincare
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Fragrance
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Makeup
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Beauty Tech & Tools
              </a>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-yellow-300 inline-block w-6 h-6 rounded relative">
                <MdOutlineFace4 className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="font-semibold">Savings</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Shop All
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Men's Grooming
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Bath & Body
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Beauty Tech & Tools
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Makeup
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Fragrance
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Nail Care
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Hair Color
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Skincare
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyDropDown;
