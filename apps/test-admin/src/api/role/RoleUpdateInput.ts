import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleUpdateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
