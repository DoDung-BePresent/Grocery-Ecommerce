import { Checkbox, ConfigProvider } from "antd";
import { CiEdit } from "react-icons/ci";

const Address = ({ title, des, status, method, darkModeEnabled }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-[1px]">
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
      <div className="flex flex-col gap-3 w-full">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-dark-2 dark:text-dark-l-1">{des}</p>
        </div>
        <div className="flex md:flex-row flex-col md:items-center justify-between text-slate-600 dark:text-slate-400 gap-4 md:gap-0">
          <div className="text-sm flex md:flex-row flex-col md:items-center md:gap-5">
            <li>{status}</li>
            <li>{method}</li>
          </div>
          <div className="flex items-center gap-2 text-black dark:text-slate-400 hover:bg-green-400 hover:text-white transition-colors ease-in-out duration-300 p-1 px-3 rounded-md w-fit">
            <CiEdit className="text-xl" />
            <span>Edit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
