import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OtherTableFromImportService } from "./otherTableFromImport.service";
import { OtherTableFromImportControllerBase } from "./base/otherTableFromImport.controller.base";

@swagger.ApiTags("otherTableFromImports")
@common.Controller("otherTableFromImports")
export class OtherTableFromImportController extends OtherTableFromImportControllerBase {
  constructor(protected readonly service: OtherTableFromImportService) {
    super(service);
  }
}
