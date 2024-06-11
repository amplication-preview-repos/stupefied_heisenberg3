import { Category } from "../category/Category";
import { Order } from "../order/Order";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  order?: Order | null;
  price: number | null;
  stock: number | null;
  updatedAt: Date;
};
