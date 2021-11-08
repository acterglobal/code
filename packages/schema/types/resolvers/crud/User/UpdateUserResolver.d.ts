import { GraphQLResolveInfo } from "graphql";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { User } from "../../../models/User";
export declare class UpdateUserResolver {
    updateUser(ctx: any, info: GraphQLResolveInfo, args: UpdateUserArgs): Promise<User | null>;
}
