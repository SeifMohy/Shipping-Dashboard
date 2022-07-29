import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { OrderInfoProps } from "../Types";
import BottomOverButtons from "./bottomOverButtons";

const BottomOver = ({
  openBottomOver,
  setOpenBottomOver,
  orderInfo,
  displayedShipments,
  setDisplayedShipments,
  updatedShipments,
  setUpdatedShipments,
}: OrderInfoProps) => {
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
                <div className="bg-white px-3 pt-3 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="flex justify-end mb-3">
                        <BottomOverButtons
                          orderInfo={orderInfo}
                          displayedShipments={displayedShipments}
                          setDisplayedShipments={setDisplayedShipments}
                          setOpenBottomOver={setOpenBottomOver}
                          updatedShipments={updatedShipments}
                          setUpdatedShipments={setUpdatedShipments}
                        />
                      </div>
                      <div className="mt-2 grid grid-cols-4 gap-2">
                        <div>
                          <p className="text-lg leading-6 font-medium text-gray-900">
                            Order #
                          </p>
                          <p className="text-sm text-gray-500">
                            {orderInfo.OrderId}
                          </p>
                        </div>
                        <div>
                          <p className="text-lg leading-6 font-medium text-gray-900">
                            Ship From
                          </p>
                          <p className="text-sm text-gray-500">
                            {orderInfo.ShipFrom}
                          </p>
                        </div>
                        <div>
                          <p className="text-lg leading-6 font-medium text-gray-900">
                            Ship To
                          </p>
                          <p className="text-sm text-gray-500">
                            {orderInfo.ShipTo}
                          </p>
                        </div>
                        <div>
                          <p className="text-lg leading-6 font-medium text-gray-900">
                            Order Lines
                          </p>
                          <div className="text-sm text-gray-500">
                            {orderInfo.OrderLines.map((order, index) => {
                              return (
                                <ul key={index}>
                                  <p>
                                    Item: {order.Description} / Qty:{" "}
                                    {order.Quantity}
                                  </p>
                                  <hr />
                                </ul>
                              );
                            })}
                          </div>
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
