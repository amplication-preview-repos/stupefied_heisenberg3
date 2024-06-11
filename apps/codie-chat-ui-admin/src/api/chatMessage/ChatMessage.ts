import { User } from "../user/User";

export type ChatMessage = {
  createdAt: Date;
  id: string;
  text: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
