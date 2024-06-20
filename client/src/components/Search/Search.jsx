import { CiSearch } from "react-icons/ci";

const Search = ({
  placeholder,
  bgColor,
  rounded,
  margin,
  padding,
  ...props
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-2 p-2 px-4 dark:text-white outline-primary ${
        bgColor ? bgColor : "dark:bg-dark-2 bg-white"
      } ${rounded ? rounded : "rounded-md"} ${margin ? margin : ""} ${
        padding ? padding : ""
      }`}
      {...props}
    >
      <input
        className="bg-transparent border-none focus:outline-none text-dark-s-2"
        type="text"
        name="Search Products"
        placeholder={placeholder || "Search Products"}
        id="search"
      />
      <label htmlFor="search">
        <CiSearch className="text-2xl hover:text-dark-s-1" />
      </label>
    </div>
  );
};

export default Search;
