// Icons
import { AiOutlineAppstore } from "react-icons/ai";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdComputer } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import { FiSmartphone } from "react-icons/fi";
import { IoTriangleSharp } from "react-icons/io5";

const DepartmentDropDown = () => {
  return (
    <div className="z-100 relative -ml-[360px] p-6 rounded-2xl flex mt-12 bg-white dark:bg-dark-1 dark:text-dark-s-2 shadow-custom">
      <IoTriangleSharp className="text-5xl absolute -top-6 right-[620px] text-white dark:text-dark-1" />
      <div className="grid grid-cols-[18vw_48vw]">
        <div className="border-r-2 pr-8 border-r-gray">
          <div className="flex items-center gap-4">
            <span className="bg-yellow-200 inline-block w-6 h-6 rounded-full relative">
              <AiOutlineAppstore className="absolute -right-2 -bottom-1 text-xl" />
            </span>
            <h3 className="font-semibold">All Departments</h3>
          </div>
          <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Savings & Featured Shops
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Electronics
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Clothing, Shoes & Accessories
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Home, Furniture & Appliances
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Toys & Video Games
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Home Improvement
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Baby
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Household Essentials
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Personal Care
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Patio & Garden
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Sports & Outdoors
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Gift Cards
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Auto, Tires and Industrial
            </a>
            <a href="#" className="hover:text-blue-600 hover:font-semibold">
              Movies, Music & Books
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 px-6">
          <div className="">
            <div className="">
              <div className="flex items-center gap-4">
                <span className="bg-purple-300 inline-block w-6 h-6 rounded relative">
                  <PiTelevisionSimpleBold className="absolute -right-2 -bottom-1 text-xl" />
                </span>
                <h3 className="font-semibold">TV & Video</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Shop all TVs
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  TVs by Size
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Smart TVs
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Roku TVs
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Streaming
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  TV Mounts & Accessories
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  DVD & Blu-Ray Players
                </a>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-4">
                <span className="bg-blue-300 inline-block w-6 h-6 rounded relative">
                  <PiTelevisionSimpleBold className="absolute -right-2 -bottom-1 text-xl" />
                </span>
                <h3 className="font-semibold">Wearable Technology</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Galaxy Watch
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Apple Watch
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Fitness Trackers
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Virtual Reality
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
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
              <h3 className="font-semibold">All Departments</h3>
            </div>
            <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Shop All Computers
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Laptops
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                PC Gaming
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Monitors
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Chromebook
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Printers & Ink
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Shop all TVs
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Computer Accessories
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Desktops
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Desktops
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Tax Software
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
                Computer Software
              </a>
              <a href="#" className="hover:text-blue-600 hover:font-semibold">
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
                <h3 className="font-semibold">Savings</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Tech Savings
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Overstock Savings
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Tech Rollbacks
                </a>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-4">
                <span className="bg-purple-300 inline-block w-6 h-6 rounded relative">
                  <FiSmartphone className="absolute -right-2 -bottom-1 text-xl" />
                </span>
                <h3 className="font-semibold">Cell Phones</h3>
              </div>
              <div className="flex flex-col gap-1 text-sm font-normal ml-10 mt-4">
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Wireless Deals
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  5G Phones
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Prepaid Phones & Plans
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Refurbished Phones
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  iPhone Accessories
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Cases & Screen Protectors
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Walmart Protection Plan
                </a>
                <a href="#" className="hover:text-blue-600 hover:font-semibold">
                  Unlocked Phones
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDropDown;
