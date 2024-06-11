import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  products?: Array<Product>;
  shippingAddress: string | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
