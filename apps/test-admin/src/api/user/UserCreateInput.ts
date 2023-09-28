import { RoleCreateNestedManyWithoutUsersInput } from "./RoleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  otherField?: string | null;
  otherField2?: string | null;
  password?: string | null;
  roles?: RoleCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
