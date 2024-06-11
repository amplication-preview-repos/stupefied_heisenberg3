import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  stock?: number | null;
};
