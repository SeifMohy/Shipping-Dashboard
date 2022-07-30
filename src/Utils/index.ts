import _ from "lodash";

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
    Checked: true,
    OrderLines: [
      { Description: "An Item that is important", Quantity: 1 },
      { Description: "An Item that is important", Quantity: 2 },
      { Description: "An Item that is important", Quantity: 3 },
    ],
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
    Checked: false,
    OrderLines: [
      { Description: "An Item that is important", Quantity: 1 },
      { Description: "An Item that is important", Quantity: 2 },
      { Description: "An Item that is important", Quantity: 3 },
    ],
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
    Checked: false,
    OrderLines: [
      { Description: "An Item that is important", Quantity: 1 },
      { Description: "An Item that is important", Quantity: 2 },
      { Description: "An Item that is important", Quantity: 3 },
    ],
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

export const orderStatusOptions = [
  "Entered",
  "Shipped",
  "Delivered",
  "Invoiced",
];

export const noInfoOrder = {
  OrderId: "No Info",
  OrderDate: "",
  ShipFrom: "",
  ShipTo: "",
  Status: "",
  ShipperReference: "",
  ShipmentNumb: "",
  Checked: false,
  OrderLines: [{ Description: "No Item", Quantity: 0 }],
};

export const filters = [
  {
    name: "Order ID",
    Id: 1,
    children: _(shipments)
      .groupBy((shipments) => shipments.OrderId)
      .map((value, key) => ({ key: key, values: value, current: false }))
      .value(),
  },
  {
    name: "Order Date",
    Id: 2,
    children: _(shipments)
      .groupBy((shipments) => shipments.OrderDate)
      .map((value, key) => ({ key: key, values: value, current: false }))
      .value(),
  },
  {
    name: "Ship From",
    Id: 3,
    children: _(shipments)
      .groupBy((shipments) => shipments.ShipFrom)
      .map((value, key) => ({ key: key, values: value, current: false }))
      .value(),
  },
  {
    name: "Ship To",
    Id: 4,
    children: _(shipments)
      .groupBy((shipments) => shipments.ShipTo)
      .map((value, key) => ({ key: key, values: value, current: false }))
      .value(),
  },
  {
    name: "Order Status",
    Id: 5,
    children: _(shipments)
      .groupBy((shipments) => shipments.Status)
      .map((value, key) => ({ key: key, values: value, current: false }))
      .value(),
  },
  {
    name: "Shipper Reference",
    Id: 6,
    children: _(shipments)
      .groupBy((shipments) => shipments.ShipperReference)
      .map((value, key) => ({ key: key, values: value, current: false }))
      .value(),
  },
  {
    name: "Shipment ID",
    Id: 7,
    children: _(shipments)
      .groupBy((shipments) => shipments.ShipmentNumb)
      .map((value, key) => ({ key: key, values: value, current: false }))
      .value(),
  },
];
