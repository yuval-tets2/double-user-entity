/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, OtherTableFromImport } from "@prisma/client";

export class OtherTableFromImportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OtherTableFromImportCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtherTableFromImportCountArgs>
  ): Promise<number> {
    return this.prisma.otherTableFromImport.count(args);
  }

  async findMany<T extends Prisma.OtherTableFromImportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtherTableFromImportFindManyArgs>
  ): Promise<OtherTableFromImport[]> {
    return this.prisma.otherTableFromImport.findMany(args);
  }
  async findOne<T extends Prisma.OtherTableFromImportFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtherTableFromImportFindUniqueArgs>
  ): Promise<OtherTableFromImport | null> {
    return this.prisma.otherTableFromImport.findUnique(args);
  }
  async create<T extends Prisma.OtherTableFromImportCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtherTableFromImportCreateArgs>
  ): Promise<OtherTableFromImport> {
    return this.prisma.otherTableFromImport.create<T>(args);
  }
  async update<T extends Prisma.OtherTableFromImportUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtherTableFromImportUpdateArgs>
  ): Promise<OtherTableFromImport> {
    return this.prisma.otherTableFromImport.update<T>(args);
  }
  async delete<T extends Prisma.OtherTableFromImportDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OtherTableFromImportDeleteArgs>
  ): Promise<OtherTableFromImport> {
    return this.prisma.otherTableFromImport.delete(args);
  }
}
