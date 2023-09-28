import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  otherField?: StringNullableFilter;
  otherField2?: StringNullableFilter;
  password?: StringNullableFilter;
  roles?: RoleListRelationFilter;
  username?: StringNullableFilter;
};
