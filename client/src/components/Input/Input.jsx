const Input = ({ placeholder, type, textSize, width, margin }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type ? type : "text"}
        className={`p-2 px-4 border-2 rounded-lg ${
          textSize ? textSize : "text-base"
        } ${
          width ? width : "w-full"
        } ${margin ? margin : "my-2"} outline-primary dark:bg-transparent`}
      />
    </>
  );
};

export default Input;
