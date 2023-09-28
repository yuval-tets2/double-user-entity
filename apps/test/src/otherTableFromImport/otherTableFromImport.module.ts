import { Module } from "@nestjs/common";
import { OtherTableFromImportModuleBase } from "./base/otherTableFromImport.module.base";
import { OtherTableFromImportService } from "./otherTableFromImport.service";
import { OtherTableFromImportController } from "./otherTableFromImport.controller";
import { OtherTableFromImportResolver } from "./otherTableFromImport.resolver";

@Module({
  imports: [OtherTableFromImportModuleBase],
  controllers: [OtherTableFromImportController],
  providers: [OtherTableFromImportService, OtherTableFromImportResolver],
  exports: [OtherTableFromImportService],
})
export class OtherTableFromImportModule {}
