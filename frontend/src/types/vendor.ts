import { Order } from "./customer";
import { Warehouse } from "./warehouse";

export type Vendor = {
  profile_img: {
    profile_img_url: string;
    public_id: string;
  };
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  shop_name: string;
  shop_description: string;
  pincode: string;
  createdAt: string;
  updatedAt: string;
};

export type RecentOrdersType = {
  orders: Order[];
};

export type NearbyWarehouses = {
  warehouses: Warehouse[];
}
