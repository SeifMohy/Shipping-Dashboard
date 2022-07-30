import { Disclosure } from "@headlessui/react";
import { classNames } from "../Utils";
import { Filter } from "../Types";

type Props = {
  filtersToDisplay: Filter[];
  setFiltersToDisplay: React.Dispatch<React.SetStateAction<Filter[]>>;
};

const SideOverFilters = ({ filtersToDisplay, setFiltersToDisplay }: Props) => {
  function changeFilterCheck(
    item: Filter,
    key: string,
    currentStatus: boolean
  ) {
    console.log(item);
    const unchangedFilters = filtersToDisplay.filter((filter) => {
      return filter.Id !== item.Id;
    });
    console.log("Unchanged", unchangedFilters);
    const optionToChange = item.children.filter((option) => option.key === key);
    const unchangedOptions = item.children.filter(
      (option) => option.key !== key
    );
    const changedOption = { ...optionToChange[0], current: !currentStatus };
    console.log("ToChange", changedOption, unchangedOptions);
    unchangedOptions.push(changedOption);
    const sortedUpdatedOptions = unchangedOptions.sort((a: any, b: any) => {
      //TODO: Type number
      return a.key - b.key;
    });
    const changedFilter = {
      ...item,
      children: sortedUpdatedOptions,
    };
    const updatedFilter = [...unchangedFilters, changedFilter];
    console.log("updated", updatedFilter);
    const sortedUpdatedFilters = updatedFilter.sort((a: any, b: any) => {
      //TODO: Type number
      return a.Id - b.Id;
    });
    return setFiltersToDisplay(sortedUpdatedFilters);
  }
  return (
    <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
      {filtersToDisplay.map((item) => (
        <Disclosure as="div" key={item.name} className="space-y-1">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={classNames(
                  "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
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
                  <div key={options.key} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={options.current}
                      onClick={() => {
                        changeFilterCheck(item, options.key, options.current);
                      }}
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
