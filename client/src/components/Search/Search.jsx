import { CiSearch } from "react-icons/ci";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-2 p-2 px-4 rounded-md bg-white dark:bg-dark-2 dark:text-white outline-primary">
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
