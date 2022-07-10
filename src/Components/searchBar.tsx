import React from "react";
import DropDown from "./dropDown";

const SearchBar = () => {
  return (
    <div>
      <div className="px-2 flex m-2">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div>
            <input
              id="search"
              name="search"
              className="block w-full bg-white border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
        <DropDown />
      </div>
    </div>
  );
};

export default SearchBar;
