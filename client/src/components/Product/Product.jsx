import { useState } from "react";
import { PiStarFill } from "react-icons/pi";

import { RiHeartLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div
      key={product.id}
      className="bg-white rounded-xl p-4 dark:bg-dark-1 dark:text-white shadow-custom hover:shadow-xl dark:hover:shadow-slate-500"
    >
      <div className="flex flex-col items-center">
        <div className="w-60 relative ">
          <img src={product.thumbnail} alt={product.title} />
          <span
            className="absolute right-0 bottom-0 p-3 shadow-md hover:shadow-dark-s-2 hover:shadow-lg transition-all ease-in-out duration-300 rounded-full dark:bg-gray-800"
            onClick={handleLikeToggle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              isLiked ? (
                <RiHeartFill className="text-xl text-red-500" />
              ) : (
                <RiHeartLine className="text-xl text-red-500" />
              )
            ) : isLiked ? (
              <RiHeartFill className="text-xl text-red-500" />
            ) : (
              <RiHeartLine className="text-xl" />
            )}
          </span>
        </div>

        <div className="">
          <h4 className="font-semibold my-1 hover:text-dark-s-1 transition-colors ease-in-out duration-200">
            <Link to="/product/dfdfdf" className="text-sm">
              {product.title}
            </Link>
          </h4>
          <small className="text-sm text-gray-400 hover:text-black transition-colors ease-in-out duration-300">
            {product.brand}
          </small>
          <div className="flex items-center justify-between mt-2 text-sm">
            <span className="font-bold font-base">${product.price}</span>
            <span className="flex items-center gap-2">
              <PiStarFill className="text-yellow-400" />
              <span className="font-bold">{product.rating}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
