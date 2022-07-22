export const shipments = [
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
    OrderId: "2",
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
    OrderId: "3",
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

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const headers = [
  "Order ID",
  "Order Date",
  "Ship From",
  "Ship To",
  "Order Status",
  "Shipper Reference",
  "Shipment ID",
];

export const noInfoOrder = {
  OrderId: "No Info",
  OrderDate: "",
  ShipFrom: "",
  ShipTo: "",
  Status: "",
  ShipperReference: "",
  ShipmentNumb: "",
  checked: false,
};