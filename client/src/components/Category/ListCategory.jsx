import { useEffect, useState } from "react";
import Category from "./Category";
import axios from "axios";

const ListCategory = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get("http://localhost:3000/brands");
        setBrands(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrands();
  }, []);

  return (
    <div className="md:w-[15vw] w-[100%]">
      <h1 className="text-lg md:text-2xl font-extrabold dark:text-white">
        Categories
      </h1>
      <div className="md:my-5 my-3 flex md:flex-col gap-4 snap-x overflow-x-auto snap-proximity w-[100%] custom-scrollbar">
        {brands.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ListCategory;
