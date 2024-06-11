import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  shippingAddress?: string | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
