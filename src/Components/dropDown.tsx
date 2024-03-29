import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { classNames, orderStatusOptions } from "../Utils";
import { SearchedShipmentsProps } from "../Types";

const DropDown = ({
  displayedShipments,
  setDisplayedShipments,
  updatedShipments,
}: SearchedShipmentsProps) => {
  const [option, setOption] = useState("Status");

  function DropChangeDisplay(option: string) {
    if (option === "Status") {
      return setDisplayedShipments(updatedShipments);
    }
    const ordersToDisplay = updatedShipments.filter(
      (item) => item.status === option
    );
    return setDisplayedShipments(ordersToDisplay);
  }

  return (
    <Menu as="div" className="mx-2 z-10 relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
          {option}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {orderStatusOptions.map((option) => {
              return (
                <Menu.Item key={option}>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        setOption(option);
                        DropChangeDisplay(option);
                      }}
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full text-left px-4 py-2 text-sm"
                      )}
                    >
                      {option}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;
