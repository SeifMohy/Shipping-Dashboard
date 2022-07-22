import React from "react";
import { orderStatusOptions } from "../Utils";

const bottomOverButtons = () => {
  return (
    <span className="relative z-0 inline-flex">
      {orderStatusOptions.map((option: string) => {
        return (
          <button
            type="button"
            className="inline-flex items-center m-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-sm text-gray-700 bg-white hover:bg-gray-50 focus:bg-gray-100"
          >
            {option}
          </button>
        );
      })}
    </span>
  );
};

export default bottomOverButtons;
