// images
import Banner from "../../assets/images/Banner.svg";

// Icons
import { LuHeart } from "react-icons/lu";
import { PiStarFill } from "react-icons/pi";
import { MdFilterList } from "react-icons/md";

// DUMMY DATA
import { categories, products } from "../../data/data";

// Components
import Filter from "../../components/Filter/Filter";

// Ant Design Components
import { Dropdown, Space } from "antd";

const Home = () => {
  return (
    <section className="container mx-auto bg-slate-100 py-8 dark:bg-gray-800 flex">
      <div className="w-[15vw] ml-6">
        <h1 className="text-[22px] md:text-2xl font-extrabold dark:text-white">
          Categories
        </h1>
        <div className="my-5 flex flex-col gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between px-4 py-1 rounded-lg bg-slate-200 hover:bg-[#77DAE6] hover:text-white transition-colors ease-in duration-200 dark:bg-gray-900 dark:text-white"
            >
              <span className="block text-md font-extrabold">
                {category.brand}
              </span>
              <img
                src={category.thumbnail}
                alt={category.brand}
                className="w-14 -mr-4"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[85vw]">
        {/* BANNER */}
        <img
          src={Banner}
          alt="Order your favorite coffee"
          className="w-[95%] mx-auto md:rounded-3xl shadow-lg dark:shadow-gray-700"
        />

        {/* BEST SELLER */}
        <div className="mx-4 md:mx-8 mt-6">
          {/* TITLE AND FILTER */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[22px] md:text-2xl font-extrabold dark:text-white">
              Total LavAzza 1320
            </h3>
            {/* FILTER */}
            <div>
              <Dropdown overlay={<Filter />} trigger={["click"]}>
                <Space>
                  <div className="bg-white w-fit p-2 px-3 rounded-lg flex items-center gap-4 dark:bg-gray-900 dark:text-white shadow-md dark:shadow-lg dark:shadow-gray-700">
                    <span className="font-semibold text-sm text-slate-600 dark:text-white">
                      Filter
                    </span>
                    <span className="">
                      <MdFilterList className="text-xl" />
                    </span>
                  </div>
                </Space>
              </Dropdown>
            </div>
          </div>

          {/* LIST PRODUCTS */}
          <div className="grid md:grid-cols-4 items-center justify-between gap-6 md:gap-10">
            {/* PRODUCT*/}
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 dark:bg-gray-900 dark:text-white shadow-md dark:shadow-lg dark:shadow-gray-700 hover:shadow-xl transition duration-300 ease-in-out"
              >
                <div className="flex flex-col items-center">
                  <div className="w-60 relative ">
                    <img src={product.thumbnail} alt={product.title} />
                    <span className="absolute right-0 bottom-0 p-3 shadow-xl rounded-full dark:bg-gray-800">
                      <LuHeart className="text-xl" />
                    </span>
                  </div>

                  <div className="">
                    <h4 className="font-semibold text-base my-3">
                      {product.title}
                    </h4>
                    <small className="text-base text-gray-400">
                      {product.brand}
                    </small>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-bold font-base">
                        ${product.price}
                      </span>
                      <span className="flex items-center gap-2">
                        <PiStarFill className="text-xl text-yellow-400" />
                        <span className="font-base font-bold">
                          {product.rating}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
