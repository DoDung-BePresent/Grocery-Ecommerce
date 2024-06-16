// images
import Banner from "../../assets/images/Banner.svg";

// Icons
import { MdFilterList } from "react-icons/md";

// DUMMY DATA
import { categories, products } from "../../data/data";

// Components
import Filter from "../../components/Filter/Filter";

// Ant Design Components
import { Dropdown, Space } from "antd";
import Product from "../../components/Product/Product";
import Category from "../../components/Category/Category";

const Home = () => {
  return (
    <section className="container mx-auto bg-secondary-1 md:py-8 py-6 md:px-8 px-6 dark:bg-dark-2 flex flex-col md:flex-row gap-8 gap-y-1">
      <div className="md:w-[15vw] w-[100%]">
        <h1 className="text-lg md:text-2xl font-extrabold dark:text-white">
          Categories
        </h1>
        {/* CATEGORIES */}
        {/* FIXME: Cái shadow custom có vấn đề*/}
        <div className="md:my-5 my-3 flex md:flex-col gap-4 snap-x overflow-x-auto snap-proximity w-[100%] custom-scrollbar">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="md:w-[85vw]">
        {/* BANNER */}
        <img
          src={Banner}
          alt="Order your favorite coffee"
          className="w-[100%] md:rounded-3xl mx-auto shadow-custom"
        />

        {/* BEST SELLER */}
        <div className=" mt-6">
          {/* TITLE AND FILTER */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg md:text-2xl font-extrabold dark:text-white">
              Total LavAzza 1320
            </h3>
            {/* FILTER */}
            <Dropdown overlay={<Filter />} trigger={["hover"]}>
              <Space>
                <div className="bg-white w-fit p-2 px-3 rounded-lg flex items-center gap-4 dark:bg-dark-1 dark:text-white shadow-custom">
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

          {/* LIST PRODUCTS */}
          <div className="grid md:grid-cols-4 items-center justify-between gap-6 md:gap-10">
            {/* PRODUCT*/}
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
