import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleCreateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
