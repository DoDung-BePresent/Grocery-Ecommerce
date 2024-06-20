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

const GroceryDropDown = () => {
  return (
    <div className="z-100 relative mt-12 -ml-[480px] p-6 rounded-2xl flex bg-white dark:bg-dark-1 dark:text-dark-s-2 shadow-custom">
      <IoTriangleSharp className="text-5xl absolute -top-6 right-[480px] text-white dark:text-dark-1" />
      <div className="grid grid-cols-[15vw_48vw]">
        <div className="pr-8">
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-purple-200 inline-block w-6 h-6 rounded-md relative">
                <BiCartAlt className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="font-semibold">Grocery</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Shop All
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Grilling Foods
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Spring Flavors
              </a>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-4">
              <span className="bg-green-200 inline-block w-6 h-6 rounded-md relative">
                <GiTomato className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="font-semibold">Fresh Produce</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Shop All
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Celebrate Salad Month
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Healthy Living
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Fresh Flowers
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Chilled Dressing
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Fresh Fruit
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Salad Kits & Bowls
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Organic produce
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Fresh Vegetables
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 px-6">
          <div className="">
            <div className="">
              <div className="flex items-center gap-4">
                <span className="bg-blue-300 inline-block w-6 h-6 rounded relative">
                  <PiBreadDuotone className="absolute -right-2 -bottom-1 text-xl" />
                </span>
                <h3 className="font-semibold">Bakery & Bread</h3>
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
                <span className="bg-yellow-200 inline-block w-6 h-6 rounded relative">
                  <PiCookingPotLight className="absolute -right-2 -bottom-1 text-xl" />
                </span>
                <h3 className="font-semibold">Frozen</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Frozen Breakfast
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Frozen Potatoes
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
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
                <h3 className="font-semibold">Snacks</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Shop All
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Chips
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Popcorn & Pretzels
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Crackers
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Salsa & Dips
                </a>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-4">
                <span className="bg-red-300 inline-block w-6 h-6 rounded-full relative">
                  <TbCandy className="absolute -right-2 -bottom-1 text-xl" />
                </span>
                <h3 className="font-semibold">Candy</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Shop All
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Better for You
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Chocolate
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Sugar Free Candy
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Gum
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Mints
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
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
                <h3 className="font-semibold">Cocktails & Mixes Coffee</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Ground Coffee
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Whole Bean Coffee
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Coffee Pods
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Instant Coffee
                </a>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-4">
                <span className="bg-green-300 inline-block w-6 h-6 rounded relative">
                  <CiCoffeeCup className="absolute -right-2 -bottom-1 text-xl" />
                </span>
                <h3 className="font-semibold">Beverages</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Shop All
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Water
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Soft Drinks
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Fruit Juice
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Sports Drinks
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Energy Drinks
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Tea
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Hot Chocolate & Cocoa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryDropDown;
