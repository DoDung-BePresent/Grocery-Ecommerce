// Ant Design Components
import { Slider, Select, Input, Tooltip } from "antd";
import { useState } from "react";
const { Search } = Input;

// React Icons
import { IoTriangleSharp } from "react-icons/io5";

const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };
  const title = value ? (
    <span className="numeric-input-title">
      {value !== "-" ? formatNumber(Number(value)) : "-"}
    </span>
  ) : (
    "Input a number"
  );
  return (
    <Tooltip
      trigger={["focus"]}
      title={title}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Input a number"
        maxLength={16}
      />
    </Tooltip>
  );
};

const Filter = ({ id }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const onChangeMinPrice = (value) => {
    setMinPrice(value);
  };

  const onChangeMaxPrice = (value) => {
    setMaxPrice(value);
  };

  const onSliderChange = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  return (
    <div
      id={id}
      className="absolute z-10 bg-white w-[70vw] right-0 p-5 rounded-2xl shadow-lg mt-2"
    >
      <IoTriangleSharp className="text-4xl absolute -top-4 right-10 text-white" />
      <h1 className="font-bold text-xl mb-4">Filter</h1>
      <div className="grid grid-cols-3 divide-x items-center">
        {/* Price */}
        <div className="pr-5">
          <h1 className="font-bold text-xl mb-6">Price</h1>

          <Slider
            range
            value={[minPrice, maxPrice]}
            onChange={onSliderChange}
            min={0}
            max={10000}
          />
          <div className="flex items-center gap-10 mt-2">
            <div className="flex flex-col gap-3">
              <span>Minimum</span>
              <NumericInput
                prefix="$"
                style={{ width: "100%" }}
                placeholder="Min price"
                value={minPrice}
                onChange={onChangeMinPrice}
                min={0}
                max={10000}
              />
            </div>
            <div className="flex flex-col gap-3">
              <span>Maximum</span>
              <NumericInput
                prefix="$"
                style={{ width: "100%" }}
                placeholder="Max price"
                value={maxPrice}
                onChange={onChangeMaxPrice}
                min={0}
                max={10000}
              />
            </div>
          </div>
        </div>
        {/* Size/Weight */}
        <div className="px-5">
          <h1 className="font-bold text-xl mb-4 mt-2">Size/Weight</h1>
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Select size"
            size="large"
            options={[
              {
                value: 200,
                label: "200g",
              },
              {
                value: 300,
                label: "300g",
              },
              {
                value: 400,
                label: "400g",
              },
              {
                value: 500,
                label: "500g",
              },
            ]}
          />
          <div className="flex items-center justify-between my-5">
            <span className="label">Small</span>
            <span className="label">Medium</span>
            <span className="label">Large</span>
          </div>
        </div>
        {/* Brand */}
        <div className="px-5">
          <h1 className="font-bold text-xl mb-4 mt-2">Brand</h1>
          <Search
            placeholder="Search brand name"
            allowClear
            style={{
              width: "100%",
            }}
            size="large"
          />
          <div className="flex items-center justify-between my-5">
            <span className="label">Lavazza</span>
            <span className="label">Nescafe</span>
            <span className="label">Starbucks</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-end mr-5 mt-3">
        <button className="text-gray-500 font-semibold">Cancel</button>
        <button className="bg-blue-500 p-2 px-3 rounded-lg text-black font-semibold">
          Show Result
        </button>
      </div>
    </div>
  );
};

export default Filter;
