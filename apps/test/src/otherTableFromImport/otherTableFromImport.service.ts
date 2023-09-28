import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OtherTableFromImportServiceBase } from "./base/otherTableFromImport.service.base";

@Injectable()
export class OtherTableFromImportService extends OtherTableFromImportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
