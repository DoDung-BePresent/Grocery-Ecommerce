const Label = ({ children, bgColor, ...props }) => {
  return (
    <span className={`label dark:bg-dark-2 text-dark-s-1 dark:text-dark-s-2 ${bgColor ? bgColor : ""}`} {...props}>
      {children}
    </span>
  );
};

export default Label;
