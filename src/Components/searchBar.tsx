import { useState } from "react";
import { SearchedShipmentsProps } from "../Types";
import { shipments } from "../Utils";
import DropDown from "./dropDown";
import SideOver from "./sideOver";

const SearchBar = ({
  displayedShipments,
  setDisplayedShipments,
}: SearchedShipmentsProps) => {
  const [openSideOver, setOpenSideOver] = useState(false);

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    const shipmentsBySearch = displayedShipments.filter((shipments) => {
      return shipments.OrderId.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setDisplayedShipments(shipments);
    } else setDisplayedShipments(shipmentsBySearch);
  };
  return (
    <div>
      <SideOver
        openSideOver={openSideOver}
        setOpenSideOver={setOpenSideOver}
        setDisplayedShipments={setDisplayedShipments}
      />
      <div className="flex p-4 bg-white">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div>
            <input
              name="search"
              className="block w-full bg-white border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search"
              type="search"
              onChange={handleFilter}
            />
          </div>
        </div>
        <DropDown
          displayedShipments={displayedShipments}
          setDisplayedShipments={setDisplayedShipments}
        />
        <button
          type="button"
          onClick={() => {
            setOpenSideOver(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          FILTER
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
