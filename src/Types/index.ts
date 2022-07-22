export type Order = {
  OrderId: string;
  OrderDate: string;
  ShipFrom: string;
  ShipTo: string;
  Status: string;
  ShipperReference: string;
  ShipmentNumb: string;
  Checked: boolean;
  OrderLines: OrderLines[];
};

export type OrderLines = {
  Description: string;
  Quantity: number;
};
