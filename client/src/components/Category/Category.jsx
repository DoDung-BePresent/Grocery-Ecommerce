const Category = ({ category }) => {
  return (
    <div
      key={category.id}
      className="flex items-center justify-between px-4 my-2 md:my-0 md:py-1 rounded-lg bg-secondary-2 hover:bg-[#77DAE6] hover:text-white dark:bg-dark-1 dark:text-white snap-center w-[55%] md:w-auto flex-shrink-0 shadow-custom"
    >
      <span className="block text-md font-extrabold">{category.brand}</span>
      <img
        src={category.thumbnail}
        alt={category.brand}
        className="w-14 -mr-4"
      />
    </div>
  );
};

export default Category;
