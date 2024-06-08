// Icons
import { IoTriangleSharp } from "react-icons/io5";
import { BiCartAlt } from "react-icons/bi";
import { GiTomato } from "react-icons/gi";
import { PiBreadDuotone } from "react-icons/pi";
import { PiCookingPotLight } from "react-icons/pi";
import { IoWaterOutline } from "react-icons/io5";
import { TbCandy } from "react-icons/tb";
import { FiCoffee } from "react-icons/fi";
import { CiCoffeeCup } from "react-icons/ci";

const GroceryDropDown = ({ id }) => {
  return (
    <div
      id={id}
      className="hidden z-100 relative bg-white w-[71vw] p-6 rounded-2xl flex dark:bg-gray-900"
    >
      <IoTriangleSharp className="text-white text-5xl absolute -top-6 right-[525px] dark:text-gray-900" />
      <div className="pr-8">
        <div className="">
          <div className="flex items-center gap-4">
            <span className="bg-purple-200 inline-block w-6 h-6 rounded-md relative">
              <BiCartAlt className="absolute -right-2 -bottom-1 text-xl" />
            </span>
            <h3 className="text-base">Grocery</h3>
          </div>
          <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
            <a href="#" className="hover:text-blue-600">
              Shop All
            </a>
            <a href="#" className="hover:text-blue-600">
              Grilling Foods
            </a>
            <a href="#" className="hover:text-blue-600">
              Spring Flavors
            </a>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-4">
            <span className="bg-green-200 inline-block w-6 h-6 rounded-md relative">
              <GiTomato className="absolute -right-2 -bottom-1 text-xl" />
            </span>
            <h3 className="text-base">Fresh Produce</h3>
          </div>
          <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
            <a href="#" className="hover:text-blue-600">
              Shop All
            </a>
            <a href="#" className="hover:text-blue-600">
              Celebrate Salad Month
            </a>
            <a href="#" className="hover:text-blue-600">
              Healthy Living
            </a>
            <a href="#" className="hover:text-blue-600">
              Fresh Flowers
            </a>
            <a href="#" className="hover:text-blue-600">
              Chilled Dressing
            </a>
            <a href="#" className="hover:text-blue-600">
              Fresh Fruit
            </a>
            <a href="#" className="hover:text-blue-600">
              Salad Kits & Bowls
            </a>
            <a href="#" className="hover:text-blue-600">
              Organic produce
            </a>
            <a href="#" className="hover:text-blue-600">
              Fresh Vegetables
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 px-6 gap-14">
        <div className="">
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-blue-300 inline-block w-6 h-6 rounded relative">
                <PiBreadDuotone className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="text-base">Bakery & Bread</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
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
              <span className="bg-yellow-200 inline-block w-6 h-6 rounded relative">
                <PiCookingPotLight className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="text-base">Frozen</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
              <a href="#" className="hover:text-blue-600">
                Frozen Breakfast
              </a>
              <a href="#" className="hover:text-blue-600">
                Frozen Potatoes
              </a>
              <a href="#" className="hover:text-blue-600">
                Frozen Meals & Snacks
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-purple-300 inline-block w-6 h-6 rounded-full relative">
                <IoWaterOutline className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="text-base">Snacks</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
              <a href="#" className="hover:text-blue-600">
                Shop All
              </a>
              <a href="#" className="hover:text-blue-600">
                Chips
              </a>
              <a href="#" className="hover:text-blue-600">
                Popcorn & Pretzels
              </a>
              <a href="#" className="hover:text-blue-600">
                Crackers
              </a>
              <a href="#" className="hover:text-blue-600">
                Salsa & Dips
              </a>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-red-300 inline-block w-6 h-6 rounded-full relative">
                <TbCandy className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="text-base">Candy</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
              <a href="#" className="hover:text-blue-600">
                Shop All
              </a>
              <a href="#" className="hover:text-blue-600">
                Better for You
              </a>
              <a href="#" className="hover:text-blue-600">
                Chocolate
              </a>
              <a href="#" className="hover:text-blue-600">
                Sugar Free Candy
              </a>
              <a href="#" className="hover:text-blue-600">
                Gum
              </a>
              <a href="#" className="hover:text-blue-600">
                Mints
              </a>
              <a href="#" className="hover:text-blue-600">
                On-the-Go
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-red-300 inline-block w-6 h-6 rounded relative">
                <FiCoffee className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="text-base">Cocktails & Mixes Coffee</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
              <a href="#" className="hover:text-blue-600">
                Ground Coffee
              </a>
              <a href="#" className="hover:text-blue-600">
                Whole Bean Coffee
              </a>
              <a href="#" className="hover:text-blue-600">
                Coffee Pods
              </a>
              <a href="#" className="hover:text-blue-600">
                Instant Coffee
              </a>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-4">
              <span className="bg-green-300 inline-block w-6 h-6 rounded relative">
                <CiCoffeeCup className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="text-base">Beverages</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
              <a href="#" className="hover:text-blue-600">
                Shop All
              </a>
              <a href="#" className="hover:text-blue-600">
                Water
              </a>
              <a href="#" className="hover:text-blue-600">
                Soft Drinks
              </a>
              <a href="#" className="hover:text-blue-600">
                Fruit Juice
              </a>
              <a href="#" className="hover:text-blue-600">
                Sports Drinks
              </a>
              <a href="#" className="hover:text-blue-600">
                Energy Drinks
              </a>
              <a href="#" className="hover:text-blue-600">
                Tea
              </a>
              <a href="#" className="hover:text-blue-600">
                Hot Chocolate & Cocoa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryDropDown;
