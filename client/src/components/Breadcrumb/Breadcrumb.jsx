import { Breadcrumb, ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import useMediaQuery from "../../hook/useMediaQuery/useMediaQuery";

const AntBreadcrumb = ({ items }) => {
  const isMobile = useMediaQuery(768);
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);
  return (
    <div className="bg-gray-100 py-4 px-5 rounded-lg dark:bg-gray-900 font-semibold">
      <ConfigProvider
        theme={{
          components: {
            Breadcrumb: {
              lastItemColor: darkModeEnabled ? "#fff" : "#000",
              separatorColor: darkModeEnabled ? "#fff" : "rgb(156 163 175)",
              separatorMargin: isMobile ? 5 : 15,
            },
          },
        }}
      >
        <Breadcrumb className="dark:text-gray-400" items={items} />
      </ConfigProvider>
    </div>
  );
};

export default AntBreadcrumb;
