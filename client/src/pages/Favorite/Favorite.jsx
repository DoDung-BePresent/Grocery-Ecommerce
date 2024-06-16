import { Checkbox, ConfigProvider } from "antd";
import AntBreadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Search from "../../components/Search/Search";
import { useSelector } from "react-redux";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Favorite = () => {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);

  return (
    <section className="container mx-auto bg-white py-8 px-6 md:px-8 dark:bg-gray-800">
      {/* Search */}
      <div className="md:hidden">
        <Search
          placeholder="Search products"
          bgColor="bg-gray-100"
          margin="mb-6"
          padding="p-3"
          darkMode="dark:bg-gray-900"
        />
      </div>

      {/* Breadcrumb */}
      <AntBreadcrumb items={[{ title: "Home" }, { title: "Favorite" }]} />

      <div className="bg-gray-100 py-4 px-5 rounded-lg dark:bg-gray-900 my-6 flex flex-col gap-3">
        <div className="flex flex-col gap-2 dark:text-white">
          <h1 className="text-lg font-bold">Favorite List</h1>
          <p className="text-sm text-gray-500 font-semibold">3 items</p>
        </div>
        <div>
          <span className="block dark:text-white">
            <ConfigProvider
              theme={{
                token: {
                  colorBgContainer: "transparent",
                  colorBorder: darkModeEnabled ? "#fff" : "#000",
                },
              }}
            >
              <Checkbox className="mr-2" />
              Select all
            </ConfigProvider>
          </span>
          <div className="flex flex-col divide-y-2">
            <div className="flex items-start">
              <span className="block mt-10">
                <ConfigProvider
                  theme={{
                    token: {
                      colorBgContainer: "transparent",
                      colorBorder: darkModeEnabled ? "#fff" : "#000",
                    },
                  }}
                >
                  <Checkbox />
                </ConfigProvider>
              </span>
              <ItemDetail isCheckout={true} />
            </div>

            <div className="flex items-start">
              <span className="block mt-10">
                <ConfigProvider
                  theme={{
                    token: {
                      colorBgContainer: "transparent",
                      colorBorder: darkModeEnabled ? "#fff" : "#000",
                    },
                  }}
                >
                  <Checkbox />
                </ConfigProvider>
              </span>
              <ItemDetail isCheckout={true} />
            </div>

            <div className="flex items-start">
              <span className="block mt-10">
                <ConfigProvider
                  theme={{
                    token: {
                      colorBgContainer: "transparent",
                      colorBorder: darkModeEnabled ? "#fff" : "#000",
                    },
                  }}
                >
                  <Checkbox />
                </ConfigProvider>
              </span>
              <ItemDetail isCheckout={true} />
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:items-center gap-4 md:gap-0 justify-between border-t-2 py-4">
            <div className="flex items-center gap-2 w-full dark:text-white">
              <FaAngleLeft />
              <Link className="text-black dark:text-gray-300 font-bold" to="/">
                Continue Shopping
              </Link>
            </div>
            <Link className="outline-none text-center border-none px-5 py-2 rounded-md bg-yellow-400 dark:text-black font-semibold md:w-40">
              All Check Out
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorite;
