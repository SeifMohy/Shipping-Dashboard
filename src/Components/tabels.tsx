import { useState } from "react";
import { Order, TabelsProps } from "../Types";
import { classNames, headers, noInfoOrder } from "../Utils";
import BottomOver from "./bottomOver";

const Tabels = ({
  displayedShipments,
  setDisplayedShipments,
  updatedShipments,
  setUpdatedShipments,
}: TabelsProps) => {
  const [openBottomOver, setOpenBottomOver] = useState(false);
  const [sortClick, setSortClick] = useState(true);
  const [orderInfo, setOrderInfo] = useState(noInfoOrder);
  function bottomOver(info: Order) {
    setOpenBottomOver(true);
    setOrderInfo(info);
  }
  function changeShipments(orders: Order[]) {
    setDisplayedShipments(orders);
    setUpdatedShipments(orders);
  }
  function changeCheck(orderId: string, currentStatus: boolean) {
    const unchangedOrders = updatedShipments.filter((shipment) => {
      return shipment.OrderId !== orderId;
    });
    console.log("unchanged", unchangedOrders);
    const orderToChange = updatedShipments.filter((shipment) => {
      return shipment.OrderId === orderId;
    });
    console.log("orderToChange", orderToChange);
    const changedOrder = { ...orderToChange[0], Checked: !currentStatus };
    const updatedOrders = [...unchangedOrders, changedOrder];
    console.log("updated", updatedOrders);
    const sortedUpdatedOrders = updatedOrders.sort((a: any, b: any) => {
      //TODO: Type number
      return a.OrderId - b.OrderId;
    });
    setOpenBottomOver(false);
    return changeShipments(sortedUpdatedOrders);
  }
  function sort(header: string) {
    switch (header) {
      case "Order ID":
        if (sortClick) {
          const sortedShipmentsId = displayedShipments.sort(
            (a: any, b: any) => {
              return a.OrderId - b.OrderId;
            }
          );
          setSortClick(!sortClick);
          return setDisplayedShipments(sortedShipmentsId);
        }
        const sortedShipmentsId = displayedShipments.sort((a: any, b: any) => {
          return b.OrderId - a.OrderId;
        });
        setSortClick(!sortClick);
        return setDisplayedShipments(sortedShipmentsId);
      case "Order Date":
        if (sortClick) {
          const sortedShipmentsDate = displayedShipments.sort(
            (a: any, b: any) => {
              return a.OrderDate - b.OrderDate;
            }
          );
          setSortClick(!sortClick);
          return setDisplayedShipments(sortedShipmentsDate);
        }
        const sortedShipmentsDate = displayedShipments.sort(
          (a: any, b: any) => {
            return b.OrderDate - a.OrderDate;
          }
        );
        setSortClick(!sortClick);
        return setDisplayedShipments(sortedShipmentsDate);
      case "Order Status":
        if (sortClick) {
          const sortedShipmentsStatus = displayedShipments.sort(
            (a: any, b: any) => {
              return a.OrderStatus - b.OrderStatus;
            }
          );
          setSortClick(!sortClick);
          return setDisplayedShipments(sortedShipmentsStatus);
        }
        const sortedShipmentsStatus = displayedShipments.sort(
          (a: any, b: any) => {
            return b.OrderStatus - a.OrderStatus;
          }
        );
        setSortClick(!sortClick);
        return setDisplayedShipments(sortedShipmentsStatus);
      default:
        break;
    }
  }
  return (
    <div>
      <BottomOver
        openBottomOver={openBottomOver}
        setOpenBottomOver={setOpenBottomOver}
        orderInfo={orderInfo}
        displayedShipments={displayedShipments}
        setDisplayedShipments={setDisplayedShipments}
        updatedShipments={updatedShipments}
        setUpdatedShipments={setUpdatedShipments}
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
                      ></th>
                      {headers.map((header: string) => {
                        return (
                          <th
                            key={header}
                            scope="col"
                            className="px-1 py-3 text-left text-sm font-normal text-blue-500"
                            onClick={() => sort(header)}
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
                            checked={shipment.Checked}
                            onChange={() =>
                              changeCheck(shipment.OrderId, shipment.Checked)
                            }
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
