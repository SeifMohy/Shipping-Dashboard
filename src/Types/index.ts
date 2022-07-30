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

export type SearchedShipmentsProps = {
  displayedShipments: Order[];
  setDisplayedShipments: React.Dispatch<
    React.SetStateAction<
      {
        OrderId: string;
        OrderDate: string;
        ShipFrom: string;
        ShipTo: string;
        Status: string;
        ShipperReference: string;
        ShipmentNumb: string;
        Checked: boolean;
        OrderLines: {
          Description: string;
          Quantity: number;
        }[];
      }[]
    >
  >;
  updatedShipments: Order[]
};

export type TabelsProps = {
  displayedShipments: Order[];
  setDisplayedShipments: React.Dispatch<
    React.SetStateAction<
      {
        OrderId: string;
        OrderDate: string;
        ShipFrom: string;
        ShipTo: string;
        Status: string;
        ShipperReference: string;
        ShipmentNumb: string;
        Checked: boolean;
        OrderLines: {
          Description: string;
          Quantity: number;
        }[];
      }[]
    >
  >;
  updatedShipments: Order[];
  setUpdatedShipments: React.Dispatch<
    React.SetStateAction<
      {
        OrderId: string;
        OrderDate: string;
        ShipFrom: string;
        ShipTo: string;
        Status: string;
        ShipperReference: string;
        ShipmentNumb: string;
        Checked: boolean;
        OrderLines: {
          Description: string;
          Quantity: number;
        }[];
      }[]
    >
  >;
};

export type OrderInfoProps = {
  openBottomOver: boolean;
  setOpenBottomOver: React.Dispatch<React.SetStateAction<boolean>>;
  orderInfo: Order;
  displayedShipments: Order[];
  setDisplayedShipments: React.Dispatch<
    React.SetStateAction<
      {
        OrderId: string;
        OrderDate: string;
        ShipFrom: string;
        ShipTo: string;
        Status: string;
        ShipperReference: string;
        ShipmentNumb: string;
        Checked: boolean;
        OrderLines: {
          Description: string;
          Quantity: number;
        }[];
      }[]
    >
  >;
  updatedShipments: Order[];
  setUpdatedShipments: React.Dispatch<
    React.SetStateAction<
      {
        OrderId: string;
        OrderDate: string;
        ShipFrom: string;
        ShipTo: string;
        Status: string;
        ShipperReference: string;
        ShipmentNumb: string;
        Checked: boolean;
        OrderLines: {
          Description: string;
          Quantity: number;
        }[];
      }[]
    >
  >;
};

export type BottomOverProps = {
  orderInfo: Order;
  displayedShipments: Order[];
  setOpenBottomOver: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayedShipments: React.Dispatch<
    React.SetStateAction<
      {
        OrderId: string;
        OrderDate: string;
        ShipFrom: string;
        ShipTo: string;
        Status: string;
        ShipperReference: string;
        ShipmentNumb: string;
        Checked: boolean;
        OrderLines: {
          Description: string;
          Quantity: number;
        }[];
      }[]
    >
  >;
  updatedShipments: Order[];
  setUpdatedShipments: React.Dispatch<
    React.SetStateAction<
      {
        OrderId: string;
        OrderDate: string;
        ShipFrom: string;
        ShipTo: string;
        Status: string;
        ShipperReference: string;
        ShipmentNumb: string;
        Checked: boolean;
        OrderLines: {
          Description: string;
          Quantity: number;
        }[];
      }[]
    >
  >;
};

export type Filter = {
  children: {
    key: string;
    values: {
      OrderId: string;
      OrderDate: string;
      ShipFrom: string;
      ShipTo: string;
      Status: string;
      ShipperReference: string;
      ShipmentNumb: string;
      Checked: boolean;
      OrderLines: {
        Description: string;
        Quantity: number;
      }[];
    }[];
    current: boolean;
  }[];
  name: string;
  Id: number;
};