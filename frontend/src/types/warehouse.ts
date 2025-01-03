export type Warehouse = {
  _id: string;
  profile_img: {
    profile_img_url: string;
  };
  name: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  status: "open" | "close";
  manager: string;
  createdAt: Date;
  updatedAt: Date;
};
