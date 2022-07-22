import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Order } from "../Types";

type Props = {
  openBottomOver: boolean;
  setOpenBottomOver: React.Dispatch<React.SetStateAction<boolean>>;
  orderInfo: Order;
};
const BottomOver = ({
  openBottomOver,
  setOpenBottomOver,
  orderInfo,
}: Props) => {
  return (
    <Transition.Root show={openBottomOver} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenBottomOver}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="z-10 absolute inset-x-0 bottom-0 w-full">
          <div className="text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative h-64 bg-white text-left overflow-hidden shadow-xl transform transition-all sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      {/* Change to buttons */}
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Order {orderInfo.OrderId}
                      </Dialog.Title>
                      <div className="mt-2 grid grid-cols-4 gap-2">
                        <div>
                          <p>Order #</p>
                          <p className="text-sm text-gray-500">
                            {orderInfo.OrderId}
                          </p>
                        </div>
                        <div>
                          <p>Ship From</p>
                          <p className="text-sm text-gray-500">
                            {orderInfo.ShipFrom} / {orderInfo.ShipTo}
                          </p>
                        </div>
                        <div>
                          <p>Ship To</p>
                          <p className="text-sm text-gray-500">
                            {orderInfo.ShipFrom} / {orderInfo.ShipTo}
                          </p>
                        </div>
                        <div>
                          <p>Order Lines</p>
                          <p className="text-sm text-gray-500">
                            {orderInfo.ShipFrom} / {orderInfo.ShipTo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BottomOver;
