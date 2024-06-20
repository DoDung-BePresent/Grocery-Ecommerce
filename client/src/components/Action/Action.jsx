
// React icons
import { BiCartAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const Action = () => {
  return (
    <div className="hidden md:flex dark:divide-dark-s-1 bg-white px-1 p-[10px] rounded-lg mr-4 w-fit justify-between dark:bg-dark-2 dark:text-white outline-primary text-dark-1">
      <div className="flex items-center gap-2 border-r-2 border-dark-s-1 px-3 action">
        <RiHeart2Fill className="text-xl action-heart-hover" />
        <span className="text-xs font-semibold block">03</span>
      </div>

      <div className="flex items-center gap-2 px-3 action">
        <BiCartAlt className="text-xl action-cart-hover" />
        <span className="text-xs font-semibold block">$65.42</span>
      </div>
    </div>
  );
};

export default Action;
