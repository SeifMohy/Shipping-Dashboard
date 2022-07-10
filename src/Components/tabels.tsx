import React, { useState } from "react";
import BottomOver from "./bottomOver";

//TODO: fix as requested
const shipments = [
  {
    OrderNumb: "Lindsay Walton",
    ShipFrom: "Front-end Developer",
    ShipTo: "lindsay.walton@example.com",
    RequiredShipDate: "Member",
    Status: "Entred",
    ShipperReference: "shipper",
    ShipmentNumb: "120",
    checked: false,
  },
  {
    OrderNumb: "Lindsay Walton",
    ShipFrom: "Front-end Developer",
    ShipTo: "lindsay.walton@example.com",
    RequiredShipDate: "Member",
    Status: "Entred",
    ShipperReference: "shipper",
    ShipmentNumb: "120",
    checked: true,
  },
  {
    OrderNumb: "Lindsay Walton",
    ShipFrom: "Front-end Developer",
    ShipTo: "lindsay.walton@example.com",
    RequiredShipDate: "Member",
    Status: "Entred",
    ShipperReference: "shipper",
    ShipmentNumb: "120",
    checked: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Tabels = () => {
  const [openBottomOver, setOpenBottomOver] = useState(false);
  return (
    <div>
      <BottomOver openBottomOver={openBottomOver} setOpenBottomOver={setOpenBottomOver} />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center"></div>
        <div className="mt-2 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
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
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          // ref={checkbox}
                          // checked={checked}
                          // onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Order #
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Ship From
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Ship To
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Required Ship Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Shipper Reference
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Shipment #
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {shipments.map((shipment) => (
                      <tr
                        key={shipment.OrderNumb}
                        className={shipment.checked ? "bg-gray-50" : undefined}
                        onClick={() => {
                          setOpenBottomOver(true);
                        }}
                      >
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {shipment.checked && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                            value={shipment.OrderNumb}
                            checked={shipment.checked}
                          />
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                            shipment.checked
                              ? "text-indigo-600"
                              : "text-gray-900"
                          )}
                          onClick={() => {}}
                        >
                          {shipment.OrderNumb}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.ShipFrom}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.ShipTo}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.RequiredShipDate}
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
