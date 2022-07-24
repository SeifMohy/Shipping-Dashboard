import { Disclosure } from "@headlessui/react";
import { classNames, filters } from "../Utils";
import _ from "lodash";
import { Order } from "../Types";
import { useState } from "react";

console.log(filters);

type Props = {
  filteredOrders: Order[];
  setFilteredOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};
const SideOverFilters = ({ setFilteredOrders, filteredOrders }: Props) => {
  console.log(filteredOrders);
  function filterDisplays(items: Order[]) {
    if (filteredOrders.length === 0) {
      return setFilteredOrders(items);
    } else {
      const addedFilter = [...filteredOrders, ...items];
      const removeDuplicates: Order[] = addedFilter.filter(
        (item, index, self) => {
          return (
            index ===
            self.findIndex((t) => {
              return t.OrderId === item.OrderId;
            })
          );
        }
      );
      return setFilteredOrders(removeDuplicates);
    }
  }
  return (
    <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
      {filters.map((item) => (
        <Disclosure as="div" key={item.name} className="space-y-1">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={classNames(
                  item.current
                    ? "bg-gray-100 text-gray-900"
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group w-full flex justify-between items-center pr-2 py-2 px-3 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                )}
              >
                {item.name}
                <svg
                  className={classNames(
                    open ? "text-gray-400 rotate-90" : "text-gray-300",
                    "mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                  )}
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="space-y-1">
                {item?.children?.map((options) => (
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onClick={() => filterDisplays(options?.values)}
                      className="h-4 w-4 rounded  border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6"
                    />
                    <ul
                      key={options.key}
                      className="group w-full flex items-center pl-3 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md"
                    >
                      {options.key}
                    </ul>
                  </div>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </nav>
  );
};

export default SideOverFilters;
