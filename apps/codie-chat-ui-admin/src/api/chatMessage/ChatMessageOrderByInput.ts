import { SortOrder } from "../../util/SortOrder";

export type ChatMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
