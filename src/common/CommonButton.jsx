import React from "react";

const CommonButton = ({ buttonName, buttonSubmit }) => {
  return (
    <div className=" flex justify-center mb-6">
      <button
        onClick={buttonSubmit}
        className=" block bg-blue-700 text-white py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95"
      >
        {buttonName}
      </button>
    </div>
  );
};

export default CommonButton;
