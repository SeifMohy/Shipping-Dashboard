import { useState } from "react";
import { classNames } from "../Utils";
import BottomOver from "./bottomOver";

const headers = [
  "Order ID",
  "Order Date",
  "Ship From",
  "Ship To",
  "Order Status",
  "Shipper Reference",
  "Shipment ID",
];
const shipments = [
  {
    OrderId: "1",
    OrderDate: "11/12/2022",
    ShipFrom:
      "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
    ShipTo:
      "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
    Status: "Entered",
    ShipperReference: "",
    ShipmentNumb: "",
    checked: true,
  },
  {
    OrderId: "1",
    OrderDate: "11/12/2022",
    ShipFrom:
      "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
    ShipTo:
      "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
    Status: "Entered",
    ShipperReference: "",
    ShipmentNumb: "",
    checked: false,
  },
  {
    OrderId: "1",
    OrderDate: "11/12/2022",
    ShipFrom:
      "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
    ShipTo:
      "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
    Status: "Entered",
    ShipperReference: "",
    ShipmentNumb: "",
    checked: false,
  },
];

const Tabels = () => {
  const [openBottomOver, setOpenBottomOver] = useState(false);
  const [orderInfo, setOrderInfo] = useState([]);
  function bottomOver(info: any) {
    //TODO: Type
    setOpenBottomOver(true);
    setOrderInfo(info);
  }
  return (
    <div>
      <BottomOver
        openBottomOver={openBottomOver}
        setOpenBottomOver={setOpenBottomOver}
        orderInfo={orderInfo}
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
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        />
                      </th>
                      {headers.map((header: string) => {
                        return (
                          <th
                            scope="col"
                            className="px-1 py-3 text-left text-sm font-normal text-gray-900"
                          >
                            {header}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {shipments.map((shipment) => (
                      <tr
                        key={shipment.OrderId}
                        className={shipment.checked ? "bg-gray-50" : undefined}
                        onClick={() => {
                          bottomOver(shipment);
                        }}
                      >
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {shipment.checked && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                            value={shipment.OrderId}
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
