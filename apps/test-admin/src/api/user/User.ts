import { Role } from "../role/Role";

export type User = {
  createdAt: Date;
  id: string;
  otherField: string | null;
  otherField2: string | null;
  password: string | null;
  roles?: Array<Role>;
  updatedAt: Date;
  username: string | null;
};
