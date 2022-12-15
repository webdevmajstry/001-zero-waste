import { User } from "@features/auth";

export type ApiUser = User & {
  password: string;
};