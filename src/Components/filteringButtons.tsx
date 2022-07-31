// import { DotsVerticalIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { SearchedShipmentsProps } from "../Types";
import { classNames } from "../Utils";

const FilteringButtons = ({
  displayedShipments,
  updatedShipments,
  setDisplayedShipments,
}: SearchedShipmentsProps) => {
  const tabs = [
    { name: "All", href: "#", current: true },
    { name: "Entered", href: "#", current: false },
    { name: "Shipped", href: "#", current: false },
    { name: "Delivered", href: "#", current: false },
    { name: "Invoiced", href: "#", current: false },
  ];

  const [currentTab, setCurrentTab] = useState("All");

  function TabChangeDisplay(tab: string) {
    if (tab === "All") {
      return setDisplayedShipments(updatedShipments);
    }
    const ordersToDisplay = updatedShipments.filter(
      (item) => item.status === tab
    );
    return setDisplayedShipments(ordersToDisplay);
  }

  return (
    <div className="bg-white border-b-2 mt-3 flex justify-between">
      <div className="w-3/5 h-full">
        <div className="sm:hidden">
          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav
            className="relative z-0 rounded-lg flex divide-gray-200"
            aria-label="Tabs"
          >
            {tabs.map((tab, tabIdx) => (
              <button
                key={tab.name}
                onClick={() => {
                  setCurrentTab(tab.name);
                  TabChangeDisplay(tab.name);
                }}
                className={classNames(
                  currentTab
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white p-2 text-sm text-center hover:bg-gray-50 focus:z-10"
                )}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    currentTab === tab.name ? "bg-blue-500" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>
      {/* <button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
        <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
      </button> */}
    </div>
  );
};

export default FilteringButtons;
