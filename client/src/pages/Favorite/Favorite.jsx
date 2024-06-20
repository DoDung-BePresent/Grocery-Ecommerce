import { Checkbox, ConfigProvider } from "antd";
import AntBreadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Search from "../../components/Search/Search";
import { useSelector } from "react-redux";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Favorite = () => {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);

  return (
    <section className="section">
      {/* Search */}
      <div className="md:hidden">
        <Search
          placeholder="Search for item"
          bgColor="dark:bg-dark-1 bg-secondary-1"
          rounded="rounded-lg"
          margin="mb-4"
          padding="py-3"
        />
      </div>

      {/* Breadcrumb */}
      <AntBreadcrumb
        items={[{ title: <Link to="/">Home</Link> }, { title: "Favorite" }]}
      />

      <div className="bg-secondary-1 py-4 px-5 rounded-lg dark:bg-dark-1 my-6 flex flex-col gap-3">
        <div className="flex flex-col gap-2 dark:text-dark-l-2">
          <h1 className="text-lg font-bold">Favorite List</h1>
          <p className="text-sm text-dark-2 dark:text-dark-l-2 font-semibold">
            3 items
          </p>
        </div>
        <div>
          <span className="block dark:text-dark-l-2">
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
            <div className="flex items-center gap-2 w-full dark:text-white hover:text-blue-400 transition-colors ease-in-out duration-300">
              <FaAngleLeft />
              <Link
                className="text-black dark:text-dark-l-2 font-bold hover:text-blue-400 transition-colors ease-in-out duration-300"
                to="/"
              >
                Continue Shopping
              </Link>
            </div>
            <div className="mx-auto md:mx-0">
              <Button
                children="All Check Out"
                to="/checkout"
                width="w-40 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorite;
