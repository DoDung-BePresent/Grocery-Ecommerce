import useMediaQuery from "../../hook/useMediaQuery/useMediaQuery";
// images
import Banner1 from "../../assets/images/Banner.svg";
import Banner2 from "../../assets/images/Banner2.svg";
import Banner3 from "../../assets/images/Banner3.svg";
import Banners1 from "../../assets/images/Banner-s-1.svg";
import Banners2 from "../../assets/images/Banner-s-2.svg";
import Banners3 from "../../assets/images/Banner-s-3.svg";

// Icons
import { MdFilterList } from "react-icons/md";

// Components
import Filter from "../../components/Filter/Filter";

// Ant Design Components
import { Dropdown, Space, Carousel, Spin } from "antd";
import Product from "../../components/Product/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import ListCategory from "../../components/Category/ListCategory";

const Home = () => {
  const isMobile = useMediaQuery(768);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/coffees");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  if (products.length == 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <section className="container mx-auto bg-secondary-1 md:py-8 py-6 md:px-8 px-6 dark:bg-dark-2 flex flex-col md:flex-row gap-8 gap-y-1">
      <ListCategory />
      <div className="md:w-[80vw]">
        {/* BANNER */}
        {isMobile ? (
          <Carousel autoplay>
            <img
              src={Banners1}
              alt="Order your favorite coffee"
              className="w-[100%] md:rounded-3xl mx-auto"
            />
            <img
              src={Banners2}
              alt="Order your favorite coffee"
              className="w-[100%] md:rounded-3xl mx-auto"
            />
            <img
              src={Banners3}
              alt="Order your favorite coffee"
              className="w-[100%] md:rounded-3xl mx-auto"
            />
          </Carousel>
        ) : (
          <Carousel autoplay>
            <img
              src={Banner1}
              alt="Order your favorite coffee"
              className="w-[100%] md:rounded-3xl mx-auto"
            />
            <img
              src={Banner2}
              alt="Order your favorite coffee"
              className="w-[100%] md:rounded-3xl mx-auto"
            />
            <img
              src={Banner3}
              alt="Order your favorite coffee"
              className="w-[100%] md:rounded-3xl mx-auto"
            />
          </Carousel>
        )}

        {/* BEST SELLER */}
        <div className=" mt-6">
          {/* TITLE AND FILTER */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg md:text-2xl font-extrabold dark:text-white">
              Total {products[0].brand} {products.length}
            </h3>
            {/* FILTER */}
            {/* FIXME: This code is not optimized! */}
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
          <div className="grid md:grid-cols-4 items-center justify-center gap-6 md:gap-10">
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
