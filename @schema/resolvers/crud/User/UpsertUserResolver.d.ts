import { GraphQLResolveInfo } from "graphql";
import { UpsertUserArgs } from "./args/UpsertUserArgs";
import { User } from "../../../models/User";
export declare class UpsertUserResolver {
    upsertUser(ctx: any, info: GraphQLResolveInfo, args: UpsertUserArgs): Promise<User>;
}
