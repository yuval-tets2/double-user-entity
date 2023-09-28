import { RoleUpdateManyWithoutUsersInput } from "./RoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  otherField?: string | null;
  otherField2?: string | null;
  password?: string | null;
  roles?: RoleUpdateManyWithoutUsersInput;
  username?: string | null;
};
