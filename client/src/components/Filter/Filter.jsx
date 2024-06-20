import styled from "styled-components";
// Ant Design Components
import { Slider, Select, Input, Tooltip, ConfigProvider } from "antd";
import { useState } from "react";
const { Search } = Input;

// React Icons
import { IoTriangleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

// Components
import Label from "../Label/Label";
import Button from "../Button/Button";

// Style Components
const InputWrapper = styled(Input)`
  &.ant-input-outlined {
    background: transparent !important;
  }
`;

const SelectWrapper = styled(Select)`
  .ant-select-selector {
    background: transparent !important;
  }

  .ant-select-selection-search,
  .ant-select-arrow {
    color: ${({ $darkModeEnabled }) =>
      $darkModeEnabled ? "white" : "black"} !important;
  }

  .ant-select-selection-placeholder,
  .ant-select-selection-item {
    color: ${({ $darkModeEnabled }) =>
      $darkModeEnabled ? "white" : "black"} !important;
  }
`;

const SearchWrapper = styled(Search)`
  .ant-input-affix-wrapper {
    background: ${({ $darkModeEnabled }) =>
      $darkModeEnabled ? "transparent" : "white"} !important;
  }

  .ant-input-affix-wrapper .ant-input {
    color: ${({ $darkModeEnabled }) =>
      $darkModeEnabled ? "white" : "black"} !important;
  }

  .ant-btn {
    background: ${({ $darkModeEnabled }) =>
      $darkModeEnabled ? "transparent" : "white"} !important;
  }

  .ant-btn-icon {
    color: ${({ $darkModeEnabled }) =>
      $darkModeEnabled ? "white" : "black"} !important;
  }

  .ant-input-clear-icon {
    color: ${({ $darkModeEnabled }) =>
      $darkModeEnabled ? "white" : "black"} !important;
  }
`;

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
      <InputWrapper
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Input a number"
        maxLength={16}
      />
    </Tooltip>
  );
};

const Filter = () => {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);

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
    <div className="absolute z-10 w-[82vw] md:w-[70vw] right-0 p-5 rounded-2xl shadow-2xl mt-3 bg-white dark:bg-dark-1 shadow-custom dark:text-white">
      <IoTriangleSharp className="text-4xl absolute -top-4 right-10 dark:text-dark-1 text-white" />
      <h1 className="font-bold text-xl mb-4">Filter</h1>
      <div className="grid grid-rows-3 divide-y items-center md:grid-cols-3 md:divide-x md:grid-rows-none md:divide-y-0">
        {/* Price */}
        <div className="md:pr-5">
          <h1 className="font-bold text-xl mb-6">Price</h1>

          <ConfigProvider
            theme={{
              components: {
                Slider: {
                  railBg: `${
                    darkModeEnabled ? "#9E9DA8" : "rgba(0, 0, 0, 0.04)"
                  }`,
                  railHoverBg: `${
                    darkModeEnabled ? "#9E9DA8" : "rgba(0, 0, 0, 0.04)"
                  }`,
                },
              },
            }}
          >
            <Slider
              range
              value={[minPrice, maxPrice]}
              onChange={onSliderChange}
              min={0}
              max={10000}
            />
          </ConfigProvider>
          <div className="flex items-center gap-10 mt-2">
            <div className="flex flex-col gap-3">
              <span>Minimum</span>
              <NumericInput
                prefix="$"
                style={{
                  width: "100%",
                  color: `${darkModeEnabled ? "white" : "black"}`,
                }}
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
                style={{
                  width: "100%",
                  color: `${darkModeEnabled ? "white" : "black"}`,
                }}
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
        <div className="md:px-5">
          <h1 className="font-bold text-xl mb-4 mt-2">Size/Weight</h1>
          <SelectWrapper
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
            $darkModeEnabled={darkModeEnabled}
          />
          <div className="flex items-center justify-between my-5">
            <Label children="Small" />
            <Label children="Medium" />
            <Label children="Large" />
          </div>
        </div>
        {/* Brand */}
        <div className="md:px-5">
          <h1 className="font-bold text-xl mb-4 mt-2">Brand</h1>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorTextPlaceholder: `${
                    darkModeEnabled ? "white" : "black"
                  }`,
                },
              },
            }}
          >
            <SearchWrapper
              placeholder="Search brand name"
              allowClear
              style={{
                width: "100%",
              }}
              size="large"
              $darkModeEnabled={darkModeEnabled}
            />
          </ConfigProvider>
          <div className="flex items-center justify-between my-5">
            <Label children="Lavazza" />
            <Label children="Nescafe" />
            <Label children="Starbucks" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-end md:mr-5 mt-3">
        <button className="text-dark-1 dark:text-dark-l-2 hover:text-dark-s-1 font-semibold">
          Cancel
        </button>
        <Button children="Show Result" width="w-fit" padding="py-2" />
      </div>
    </div>
  );
};

export default Filter;
