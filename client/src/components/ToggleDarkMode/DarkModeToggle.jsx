import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../actions/darkModeActions";

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <button
      onClick={handleToggle}
      className="p-[10px] mr-4 bg-white text-xl rounded-lg dark:text-white dark:bg-dark-2 outline-primary"
    >
      {darkModeEnabled ? <MdDarkMode /> : <CiLight />}
    </button>
  );
};

export default DarkModeToggle;
