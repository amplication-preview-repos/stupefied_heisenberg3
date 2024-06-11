import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  shippingAddress?: string | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
