import { Breadcrumb, ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import useMediaQuery from "../../hook/useMediaQuery/useMediaQuery";

const AntBreadcrumb = ({ items }) => {
  const isMobile = useMediaQuery(768);
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);
  return (
    <div className="bg-secondary-1 py-4 px-5 rounded-lg dark:bg-dark-1 font-semibold">
      <ConfigProvider
        theme={{
          components: {
            Breadcrumb: {
              lastItemColor: darkModeEnabled ? "#fff" : "#000",
              separatorColor: darkModeEnabled ? "#fff" : "rgb(156 163 175)",
              separatorMargin: isMobile ? 5 : 15,
              linkColor: darkModeEnabled
                ? "rgb(156 163 175)"
                : "rgba(0, 0, 0, 0.45)",
              colorBgTextHover: darkModeEnabled
                ? "#fff"
                : "rgba(0, 0, 0, 0.06)",
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
