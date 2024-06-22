import axios from "axios";
import { useState } from "react";
import { PiStarFill } from "react-icons/pi";

import { RiHeartLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(product.isLiked);
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeToggle = async (e) => {
    e.preventDefault();
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);

    try {
      await axios.put(`http://localhost:3000/coffees/${product.id}`, {
        ...product,
        isLiked: newIsLiked,
      });
    } catch (error) {
      console.error("Error updating isLiked", error);
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 dark:bg-dark-1 dark:text-white shadow-custom hover:shadow-xl dark:hover:shadow-slate-500">
      <div className="flex flex-col">
        <div className="w-60 relative ">
          <div
            className="w-64 h-64"
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
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
            <Link to={`/product/${product._id}`} className="text-sm">
              {product.name}
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
