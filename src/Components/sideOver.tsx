import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SideOverFilters from "./sideOverFilters";
import { Order } from "../Types";

type Props = {
  openSideOver: boolean;
  setOpenSideOver: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayedShipments: React.Dispatch<
    React.SetStateAction<
      {
        OrderId: string;
        OrderDate: string;
        ShipFrom: string;
        ShipTo: string;
        Status: string;
        ShipperReference: string;
        ShipmentNumb: string;
        Checked: boolean;
        OrderLines: {
          Description: string;
          Quantity: number;
        }[];
      }[]
    >
  >;
};
const SideOver = ({
  setOpenSideOver,
  openSideOver,
  setDisplayedShipments,
}: Props) => {
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  return (
    <Transition.Root show={openSideOver} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenSideOver}>
        <div className="fixed inset-0" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                  <div className="flex h-5/6 flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6"></div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <SideOverFilters
                          filteredOrders={filteredOrders}
                          setFilteredOrders={setFilteredOrders}
                        />
                      </div>
                    </div>
                    <div className="z-50 w-full fixed flex justify-center py-7 bg-white h-28 bottom-0">
                      <button
                        type="button"
                        onClick={() => setOpenSideOver(false)}
                        className="z-51 m-1 h-10 px-4 py-2 border border-gray-300 text-sm font-medium rounded-sm text-gray-700 bg-white hover:bg-gray-50 focus:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setDisplayedShipments(filteredOrders);
                          setOpenSideOver(false);
                        }}
                        className="z-51 h-10 m-1 px-4 py-2 border bg-blue-500 border-gray-300 text-sm text-white font-medium rounded-sm hover:bg-blue-300 focus:bg-blue-300"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SideOver;
