import { DotsVerticalIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { classNames } from "../Utils";

const FilteringButtons = () => {
  const tabs = [
    { name: "ALL", href: "#", current: true },
    { name: "ENTERED", href: "#", current: false },
    { name: "BOOKED", href: "#", current: false },
    { name: "SELF FULFILLED", href: "#", current: false },
    { name: "ARCHIVED", href: "#", current: false },
  ];

  const [currentTab, setCurrentTab] = useState("ALL");

  return (
    <div className="bg-white p-2 border-b-2 mt-3 flex justify-between">
      <div className="w-1/2">
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
                    currentTab === tab.name
                      ? "bg-blue-500"
                      : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>
      <button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
        <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default FilteringButtons;
