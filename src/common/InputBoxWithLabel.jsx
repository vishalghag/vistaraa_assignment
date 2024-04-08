import React from "react";

const InputBoxWithLabel = ({
  labelName,
  type,
  placeHolder,
  value,
  monitorState,
  errorState,
}) => {
  return (
    <div className="mb-3">
      <label className=" font-medium flex">{labelName}</label>
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={monitorState}
        className=" w-full border rounded-md bg-transparent border-gray-300 p-3 mt-2"
      />
      <div className=" mt-2">
        <span className=" text-red-500 font-thin">{errorState}</span>
      </div>
    </div>
  );
};

export default InputBoxWithLabel;
