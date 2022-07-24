import { useState } from "react";
import { Order, SearchedShipmentsProps } from "../Types";
import { classNames, headers, noInfoOrder, shipments } from "../Utils";
import BottomOver from "./bottomOver";

const Tabels = ({
  displayedShipments,
  setDisplayedShipments,
}: SearchedShipmentsProps) => {
  const [openBottomOver, setOpenBottomOver] = useState(false);
  const [orderInfo, setOrderInfo] = useState(noInfoOrder);
  function bottomOver(info: Order) {
    setOpenBottomOver(true);
    setOrderInfo(info);
  }
  return (
    <div>
      <BottomOver
        openBottomOver={openBottomOver}
        setOpenBottomOver={setOpenBottomOver}
        orderInfo={orderInfo}
        displayedShipments={displayedShipments}
        setDisplayedShipments={setDisplayedShipments}
      />
      <div>
        <div className="sm:flex sm:items-center"></div>
        <div className="mt-2 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle md:px-6 lg:px-8">
              <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full table-fixed divide-y divide-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="relative w-12 px-6 sm:w-16 sm:px-8"
                      >
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6"
                        />
                      </th>
                      {headers.map((header: string) => {
                        return (
                          <th
                            key={header}
                            scope="col"
                            className="px-1 py-3 text-left text-sm font-normal text-blue-500"
                          >
                            {header}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {displayedShipments.map((shipment: Order) => (
                      <tr
                        key={shipment.OrderId}
                        className={shipment.Checked ? "bg-gray-50" : undefined}
                      >
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {shipment.Checked && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-600" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6"
                            value={shipment.OrderId}
                            // checked={shipment.Checked}
                          />
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                            shipment.Checked ? "text-blue-600" : "text-gray-900"
                          )}
                          onClick={() => {
                            bottomOver(shipment);
                          }}
                        >
                          {shipment.OrderId}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.OrderDate}
                        </td>
                        <td className="whitespace-wrap max-w-xs px-3 py-4 text-sm text-gray-500">
                          {shipment.ShipFrom}
                        </td>
                        <td className="whitespace-wrap max-w-xs px-3 py-4 text-sm text-gray-500">
                          {shipment.ShipTo}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.Status}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.ShipperReference}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.ShipmentNumb}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabels;
