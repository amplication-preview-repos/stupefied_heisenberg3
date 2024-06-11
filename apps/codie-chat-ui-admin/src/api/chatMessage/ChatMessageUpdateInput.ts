import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatMessageUpdateInput = {
  text?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
