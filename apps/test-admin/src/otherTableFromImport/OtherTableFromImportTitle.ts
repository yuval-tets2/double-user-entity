import { OtherTableFromImport as TOtherTableFromImport } from "../api/otherTableFromImport/OtherTableFromImport";

export const OTHERTABLEFROMIMPORT_TITLE_FIELD = "id";

export const OtherTableFromImportTitle = (
  record: TOtherTableFromImport
): string => {
  return record.id?.toString() || String(record.id);
};
