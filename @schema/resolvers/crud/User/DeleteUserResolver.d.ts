import { GraphQLResolveInfo } from "graphql";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { User } from "../../../models/User";
export declare class DeleteUserResolver {
    deleteUser(ctx: any, info: GraphQLResolveInfo, args: DeleteUserArgs): Promise<User | null>;
}
