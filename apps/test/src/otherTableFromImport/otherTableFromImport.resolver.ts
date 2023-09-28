import * as graphql from "@nestjs/graphql";
import { OtherTableFromImportResolverBase } from "./base/otherTableFromImport.resolver.base";
import { OtherTableFromImport } from "./base/OtherTableFromImport";
import { OtherTableFromImportService } from "./otherTableFromImport.service";

@graphql.Resolver(() => OtherTableFromImport)
export class OtherTableFromImportResolver extends OtherTableFromImportResolverBase {
  constructor(protected readonly service: OtherTableFromImportService) {
    super(service);
  }
}
