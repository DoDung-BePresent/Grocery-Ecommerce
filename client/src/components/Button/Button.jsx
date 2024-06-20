import { Link } from "react-router-dom";

const Button = ({ to, children, textSize, padding, width, ...props }) => {
  return (
    <Link
      to={to}
      className={`${textSize ? textSize : ""} ${
        padding ? padding : "py-1"
      } p-3 my-2 ${
        width ? width : "w-full"
      } block text-center rounded-lg bg-orange-primary text-dark-2 hover:text-dark-2 font-semibold outline-primary`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
