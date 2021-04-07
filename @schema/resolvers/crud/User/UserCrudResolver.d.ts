import { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { UpsertUserArgs } from "./args/UpsertUserArgs";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";
export declare class UserCrudResolver {
    user(ctx: any, args: FindUniqueUserArgs): Promise<User | null>;
    findFirstUser(ctx: any, args: FindFirstUserArgs): Promise<User | null>;
    users(ctx: any, args: FindManyUserArgs): Promise<User[]>;
    createUser(ctx: any, args: CreateUserArgs): Promise<User>;
    deleteUser(ctx: any, args: DeleteUserArgs): Promise<User | null>;
    updateUser(ctx: any, args: UpdateUserArgs): Promise<User | null>;
    deleteManyUser(ctx: any, args: DeleteManyUserArgs): Promise<AffectedRowsOutput>;
    updateManyUser(ctx: any, args: UpdateManyUserArgs): Promise<AffectedRowsOutput>;
    upsertUser(ctx: any, args: UpsertUserArgs): Promise<User>;
    aggregateUser(ctx: any, info: GraphQLResolveInfo, args: AggregateUserArgs): Promise<AggregateUser>;
}
