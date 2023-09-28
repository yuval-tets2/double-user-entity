/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateRoleArgs } from "./CreateRoleArgs";
import { UpdateRoleArgs } from "./UpdateRoleArgs";
import { DeleteRoleArgs } from "./DeleteRoleArgs";
import { RoleCountArgs } from "./RoleCountArgs";
import { RoleFindManyArgs } from "./RoleFindManyArgs";
import { RoleFindUniqueArgs } from "./RoleFindUniqueArgs";
import { Role } from "./Role";
import { User } from "../../user/base/User";
import { RoleService } from "../role.service";
@graphql.Resolver(() => Role)
export class RoleResolverBase {
  constructor(protected readonly service: RoleService) {}

  async _rolesMeta(
    @graphql.Args() args: RoleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Role])
  async roles(@graphql.Args() args: RoleFindManyArgs): Promise<Role[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Role, { nullable: true })
  async role(@graphql.Args() args: RoleFindUniqueArgs): Promise<Role | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Role)
  async createRole(@graphql.Args() args: CreateRoleArgs): Promise<Role> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Role)
  async updateRole(@graphql.Args() args: UpdateRoleArgs): Promise<Role | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Role)
  async deleteRole(@graphql.Args() args: DeleteRoleArgs): Promise<Role | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async resolveFieldUser(@graphql.Parent() parent: Role): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
