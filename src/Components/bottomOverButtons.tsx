import { BottomOverProps, Order } from "../Types";
import { orderStatusOptions } from "../Utils";

const bottomOverButtons = ({
  orderInfo,
  displayedShipments,
  setDisplayedShipments,
  setOpenBottomOver,
  updatedShipments,
  setUpdatedShipments,
}: BottomOverProps) => {
  function changeShipments(orders: Order[]) {
    setDisplayedShipments(orders);
    setUpdatedShipments(orders);
  }
  function changeStatus(item: Order, status: string) {
    const unchangedOrders = updatedShipments.filter((shipment) => {
      return shipment.OrderId !== item.OrderId;
    });
    console.log("unchanged", unchangedOrders);
    const orderToChange = updatedShipments.filter((shipment) => {
      return shipment.OrderId === item.OrderId;
    });
    console.log("orderToChange", orderToChange);
    const changedOrder = { ...orderToChange[0], Status: status };
    const updatedOrders = [...unchangedOrders, changedOrder];
    console.log("updated", updatedOrders);
    const sortedUpdatedOrders = updatedOrders.sort((a: any, b: any) => {
      //TODO: Type number
      return a.OrderId - b.OrderId;
    });
    setOpenBottomOver(false);
    return changeShipments(sortedUpdatedOrders);
  }
  return (
    <span className="relative z-0 inline-flex">
      {orderStatusOptions.map((option: string) => {
        return (
          <button
            key={option}
            type="submit"
            onClick={() => {
              changeStatus(orderInfo, option);
            }}
            className="inline-flex items-center m-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-sm text-gray-700 bg-white hover:bg-gray-50"
          >
            {option}
          </button>
        );
      })}
    </span>
  );
};

export default bottomOverButtons;
