import { useState } from "react";
import DropDown from "./dropDown";
import SideOver from "./sideOver";

const SearchBar = () => {
  const [openSideOver, setOpenSideOver] = useState(false);

  return (
    <div>
      <SideOver openSideOver={openSideOver} setOpenSideOver={setOpenSideOver} />
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
        <button
          type="button"
          onClick={() => {
            setOpenSideOver(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          FILTER
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
