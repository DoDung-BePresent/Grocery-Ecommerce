import { useState } from "react";
import { PiStarFill } from "react-icons/pi";

import { RiHeartLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";

const Product = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div
      key={product.id}
      className="bg-white rounded-xl p-4 dark:bg-dark-1 dark:text-white shadow-custom hover:shadow-xl"
    >
      <div className="flex flex-col items-center">
        <div className="w-60 relative ">
          <img src={product.thumbnail} alt={product.title} />
          <span
            className="absolute right-0 bottom-0 p-3 shadow-xl rounded-full dark:bg-gray-800"
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
          <h4 className="font-semibold text-base my-3">{product.title}</h4>
          <small className="text-base text-gray-400">{product.brand}</small>
          <div className="flex items-center justify-between mt-3">
            <span className="font-bold font-base">${product.price}</span>
            <span className="flex items-center gap-2">
              <PiStarFill className="text-xl text-yellow-400" />
              <span className="font-base font-bold">{product.rating}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
