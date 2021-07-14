import { GraphQLResolveInfo } from "graphql";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { User } from "../../../models/User";
export declare class CreateUserResolver {
    createUser(ctx: any, info: GraphQLResolveInfo, args: CreateUserArgs): Promise<User>;
}
