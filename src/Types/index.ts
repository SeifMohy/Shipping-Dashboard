export type Order = {
  id: number;
  orderDate: string;
  shipFrom: Address;
  shipTo: Address;
  status: string;
  shipperReference: number;
  shipmentNumb: number;
  checked: boolean;
  orderLines: OrderLines[];
};
export type OrderLines = {
  description: string;
  quantity: number;
};
export type Address = {
  addressId: number;
  addressLine1: string;
  addressLine2: string;
  city: string;
  company: string;
  contact: string;
  country: string;
  state: string;
  zip: string;
};

export type SearchedShipmentsProps = {
  displayedShipments: Order[];
  setDisplayedShipments: React.Dispatch<React.SetStateAction<Order[]>>;
  updatedShipments: Order[];
};

export type TabelsProps = {
  displayedShipments: Order[];
  setDisplayedShipments: React.Dispatch<React.SetStateAction<Order[]>>;
  updatedShipments: Order[];
  setUpdatedShipments: React.Dispatch<React.SetStateAction<Order[]>>;
};

export type OrderInfoProps = {
  openBottomOver: boolean;
  setOpenBottomOver: React.Dispatch<React.SetStateAction<boolean>>;
  orderInfo: Order | undefined;
  displayedShipments: Order[];
  setDisplayedShipments: React.Dispatch<React.SetStateAction<Order[]>>;
  updatedShipments: Order[];
  setUpdatedShipments: React.Dispatch<React.SetStateAction<Order[]>>;
};

export type BottomOverProps = {
  orderInfo: Order | undefined;
  displayedShipments: Order[];
  setOpenBottomOver: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayedShipments: React.Dispatch<React.SetStateAction<Order[]>>;
  updatedShipments: Order[];
  setUpdatedShipments: React.Dispatch<React.SetStateAction<Order[]>>;
};

export type Filter = {
  children: {
    key: string;
    values: {
      id: number;
      orderDate: string;
      shipFrom: Address;
      shipTo: Address;
      status: string;
      shipperReference: number;
      shipmentNumb: number;
      checked: boolean;
      orderLines: {
        description: string;
        quantity: number;
      }[];
    }[];
    current: boolean;
  }[];
  name: string;
  Id: number;
};
