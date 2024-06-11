import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatMessageCreateInput = {
  text?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
