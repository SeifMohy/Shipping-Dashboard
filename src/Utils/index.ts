
// export const shipments = [
//   {
//     OrderId: "1",
//     OrderDate: "11/12/2022",
//     ShipFrom:
//       "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
//     ShipTo:
//       "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
//     Status: "Entered",
//     ShipperReference: "",
//     ShipmentNumb: "",
//     Checked: true,
//     OrderLines: [
//       { Description: "An Item that is important", Quantity: 1 },
//       { Description: "An Item that is important", Quantity: 2 },
//       { Description: "An Item that is important", Quantity: 3 },
//     ],
//   },
//   {
//     OrderId: "2",
//     OrderDate: "11/12/2022",
//     ShipFrom:
//       "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
//     ShipTo:
//       "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
//     Status: "Entered",
//     ShipperReference: "",
//     ShipmentNumb: "",
//     Checked: false,
//     OrderLines: [
//       { Description: "An Item that is important", Quantity: 1 },
//       { Description: "An Item that is important", Quantity: 2 },
//       { Description: "An Item that is important", Quantity: 3 },
//     ],
//   },
//   {
//     OrderId: "3",
//     OrderDate: "11/12/2022",
//     ShipFrom:
//       "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
//     ShipTo:
//       "Company, Contact, Address Line 1, Address Line 2, City, State, Zip, Country",
//     Status: "Entered",
//     ShipperReference: "",
//     ShipmentNumb: "",
//     Checked: false,
//     OrderLines: [
//       { Description: "An Item that is important", Quantity: 1 },
//       { Description: "An Item that is important", Quantity: 2 },
//       { Description: "An Item that is important", Quantity: 3 },
//     ],
//   },
// ];

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

// export const noInfoOrder = {
//   OrderId: 0,
//   OrderDate: "",
//   ShipFrom: "",
//   ShipTo: "",
//   Status: "",
//   ShipperReference: "",
//   ShipmentNumb: "",
//   Checked: false,
//   OrderLines: [{ Description: "No Item", Quantity: 0 }],
// };

