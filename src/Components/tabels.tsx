import { useState } from "react";
import { Order, TabelsProps } from "../Types";
import { classNames, headers } from "../Utils";
import BottomOver from "./bottomOver";

const Tabels = ({
  displayedShipments,
  setDisplayedShipments,
  updatedShipments,
  setUpdatedShipments,
}: TabelsProps) => {
  const [openBottomOver, setOpenBottomOver] = useState(false);
  const [sortClick, setSortClick] = useState(true);
  const [orderInfo, setOrderInfo] = useState<Order>();
  function bottomOver(info: Order) {
    setOpenBottomOver(true);
    setOrderInfo(info);
  }
  function changeShipments(orders: Order[]) {
    setDisplayedShipments(orders);
    setUpdatedShipments(orders);
  }
  function changeCheck(orderId: number, currentStatus: boolean) {
    const unchangedOrders = updatedShipments.filter((shipment) => {
      return shipment.id !== orderId;
    });
    console.log("unchanged", unchangedOrders);
    const orderToChange = updatedShipments.filter((shipment) => {
      return shipment.id === orderId;
    });
    console.log("orderToChange", orderToChange);
    const changedOrder = { ...orderToChange[0], checked: !currentStatus };
    const updatedOrders = [...unchangedOrders, changedOrder];
    console.log("updated", updatedOrders);
    const sortedUpdatedOrders = updatedOrders.sort((a: any, b: any) => {
      return a.id - b.id;
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
              return a.id - b.id;
            }
          );
          setSortClick(!sortClick);
          return setDisplayedShipments(sortedShipmentsId);
        }
        const sortedShipmentsId = displayedShipments.sort((a: any, b: any) => {
          return b.id - a.id;
        });
        setSortClick(!sortClick);
        return setDisplayedShipments(sortedShipmentsId);
      case "Order Date":
        if (sortClick) {
          const sortedShipmentsDate = displayedShipments.sort(
            (a: any, b: any) => {
              return a.orderDate - b.orderDate;
            }
          );
          setSortClick(!sortClick);
          return setDisplayedShipments(sortedShipmentsDate);
        }
        const sortedShipmentsDate = displayedShipments.sort(
          (a: any, b: any) => {
            return b.orderDate - a.orderDate;
          }
        );
        setSortClick(!sortClick);
        return setDisplayedShipments(sortedShipmentsDate);
      case "Order Status":
        if (sortClick) {
          const sortedShipmentsStatus = displayedShipments.sort(
            (a: any, b: any) => {
              return a.status - b.status;
            }
          );
          setSortClick(!sortClick);
          return setDisplayedShipments(sortedShipmentsStatus);
        }
        const sortedShipmentsStatus = displayedShipments.sort(
          (a: any, b: any) => {
            return b.status - a.status;
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
                        key={shipment.id}
                        className={shipment.checked ? "bg-gray-50" : undefined}
                      >
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {shipment.checked && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-600" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6"
                            value={shipment.id}
                            checked={shipment.checked}
                            onChange={() =>
                              changeCheck(shipment.id, shipment.checked)
                            }
                          />
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                            shipment.checked ? "text-blue-600" : "text-gray-900"
                          )}
                          onClick={() => {
                            bottomOver(shipment);
                          }}
                        >
                          {shipment.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.orderDate}
                        </td>
                        <td className="whitespace-wrap max-w-xs px-3 py-4 text-sm text-gray-500">
                          {`${shipment.shipFrom.addressLine1}, ${shipment.shipFrom.company}, ${shipment.shipFrom.country}`}
                        </td>
                        <td className="whitespace-wrap max-w-xs px-3 py-4 text-sm text-gray-500">
                          {`${shipment.shipTo.addressLine1}, ${shipment.shipTo.company}, ${shipment.shipTo.country}`}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.status}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.shipperReference}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {shipment.shipmentNumb}
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
