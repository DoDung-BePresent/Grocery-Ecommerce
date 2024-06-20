import { Checkbox, ConfigProvider } from "antd";

const Shipping = ({ darkModeEnabled, image, name, shipTime, price }) => {
  return (
    <div className="flex md:flex-row flex-col gap-3 md:gap-0 items-center justify-between bg-white dark:bg-dark-2 p-3 px-4 md:px-6 rounded-xl">
      <div className="flex justify-start items-center gap-4 w-full">
        <div className="rounded-lg mt-2">
          <img
            src={image}
            alt=""
            className="w-16 h-10 object-cover rounded-lg"
          />
        </div>
        <div>
          <h3 className="font-bold text-sm mb-1">{name}</h3>
          <p className="text-xs">Delivery: {shipTime}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 hover:text-blue-400 transition-colors ease-in-out duration-300 -ml-4 md:ml-0">
        <span className="font-bold text-sm">{price}</span>
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
      </div>
    </div>
  );
};

export default Shipping;
