// Icons
import { AiOutlineAppstore } from "react-icons/ai";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdComputer } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import { FiSmartphone } from "react-icons/fi";
import { IoTriangleSharp } from "react-icons/io5";

const DepartmentDropDown = ({ id }) => {
  return (
    <div
      id={id}
      className="hidden z-100 relative bg-white w-[70vw] p-6 rounded-2xl flex dark:bg-gray-900"
    >
      <IoTriangleSharp className="text-white text-5xl absolute -top-6 right-[525px] dark:text-gray-900" />
      <div className="border-r-2 pr-8 border-r-gray">
        <div className="flex items-center gap-4">
          <span className="bg-yellow-200 inline-block w-6 h-6 rounded-full relative">
            <AiOutlineAppstore className="absolute -right-2 -bottom-1 text-xl" />
          </span>
          <h3 className="text-base">All Departments</h3>
        </div>
        <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
          <a href="#" className="hover:text-blue-600">
            Savings & Featured Shops
          </a>
          <a href="#" className="hover:text-blue-600">
            Electronics
          </a>
          <a href="#" className="hover:text-blue-600">
            Clothing, Shoes & Accessories
          </a>
          <a href="#" className="hover:text-blue-600">
            Home, Furniture & Appliances
          </a>
          <a href="#" className="hover:text-blue-600">
            Toys & Video Games
          </a>
          <a href="#" className="hover:text-blue-600">
            Home Improvement
          </a>
          <a href="#" className="hover:text-blue-600">
            Baby
          </a>
          <a href="#" className="hover:text-blue-600">
            Household Essentials
          </a>
          <a href="#" className="hover:text-blue-600">
            Personal Care
          </a>
          <a href="#" className="hover:text-blue-600">
            Patio & Garden
          </a>
          <a href="#" className="hover:text-blue-600">
            Sports & Outdoors
          </a>
          <a href="#" className="hover:text-blue-600">
            Gift Cards
          </a>
          <a href="#" className="hover:text-blue-600">
            Auto, Tires and Industrial
          </a>
          <a href="#" className="hover:text-blue-600">
            Movies, Music & Books
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 px-6 gap-14">
        <div className="">
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-purple-300 inline-block w-6 h-6 rounded relative">
                <PiTelevisionSimpleBold className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="text-base">TV & Video</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
              <a href="#" className="hover:text-blue-600">
                Shop all TVs
              </a>
              <a href="#" className="hover:text-blue-600">
                TVs by Size
              </a>
              <a href="#" className="hover:text-blue-600">
                Smart TVs
              </a>
              <a href="#" className="hover:text-blue-600">
                Roku TVs
              </a>
              <a href="#" className="hover:text-blue-600">
                Streaming
              </a>
              <a href="#" className="hover:text-blue-600">
                TV Mounts & Accessories
              </a>
              <a href="#" className="hover:text-blue-600">
                DVD & Blu-Ray Players
              </a>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-4">
              <span className="bg-blue-300 inline-block w-6 h-6 rounded relative">
                <PiTelevisionSimpleBold className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="text-base">Wearable Technology</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
              <a href="#" className="hover:text-blue-600">
                Galaxy Watch
              </a>
              <a href="#" className="hover:text-blue-600">
                Apple Watch
              </a>
              <a href="#" className="hover:text-blue-600">
                Fitness Trackers
              </a>
              <a href="#" className="hover:text-blue-600">
                Virtual Reality
              </a>
              <a href="#" className="hover:text-blue-600">
                Headphones
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4">
            <span className="bg-red-200 inline-block w-6 h-6 rounded-full relative">
              <MdComputer className="absolute -right-2 -bottom-1 text-xl" />
            </span>
            <h3 className="text-base">All Departments</h3>
          </div>
          <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
            <a href="#" className="hover:text-blue-600">
              Shop All Computers
            </a>
            <a href="#" className="hover:text-blue-600">
              Laptops
            </a>
            <a href="#" className="hover:text-blue-600">
              PC Gaming
            </a>
            <a href="#" className="hover:text-blue-600">
              Monitors
            </a>
            <a href="#" className="hover:text-blue-600">
              Chromebook
            </a>
            <a href="#" className="hover:text-blue-600">
              Printers & Ink
            </a>
            <a href="#" className="hover:text-blue-600">
              Shop all TVs
            </a>
            <a href="#" className="hover:text-blue-600">
              Computer Accessories
            </a>
            <a href="#" className="hover:text-blue-600">
              Desktops
            </a>
            <a href="#" className="hover:text-blue-600">
              Desktops
            </a>
            <a href="#" className="hover:text-blue-600">
              Tax Software
            </a>
            <a href="#" className="hover:text-blue-600">
              Computer Software
            </a>
            <a href="#" className="hover:text-blue-600">
              PC Finder
            </a>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="flex items-center gap-4">
              <span className="bg-green-300 inline-block w-6 h-6 rounded relative">
                <GrShieldSecurity className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="text-base">Savings</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
              <a href="#" className="hover:text-blue-600">
                Tech Savings
              </a>
              <a href="#" className="hover:text-blue-600">
                Overstock Savings
              </a>
              <a href="#" className="hover:text-blue-600">
                Tech Rollbacks
              </a>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-4">
              <span className="bg-purple-300 inline-block w-6 h-6 rounded relative">
                <FiSmartphone className="absolute -right-2 -bottom-1 text-xl" />
              </span>
              <h3 className="text-base">Cell Phones</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal text-gray-600 ml-10 mt-4 dark:text-gray-400">
              <a href="#" className="hover:text-blue-600">
                Wireless Deals
              </a>
              <a href="#" className="hover:text-blue-600">
                5G Phones
              </a>
              <a href="#" className="hover:text-blue-600">
                Prepaid Phones & Plans
              </a>
              <a href="#" className="hover:text-blue-600">
                Refurbished Phones
              </a>
              <a href="#" className="hover:text-blue-600">
                iPhone Accessories
              </a>
              <a href="#" className="hover:text-blue-600">
                Cases & Screen Protectors
              </a>
              <a href="#" className="hover:text-blue-600">
                Walmart Protection Plan
              </a>
              <a href="#" className="hover:text-blue-600">
                Unlocked Phones
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDropDown;
