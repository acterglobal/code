import { GraphQLResolveInfo } from "graphql";
import { FindUniquePostArgs } from "./args/FindUniquePostArgs";
import { Post } from "../../../models/Post";
export declare class FindUniquePostResolver {
    post(ctx: any, info: GraphQLResolveInfo, args: FindUniquePostArgs): Promise<Post | null>;
}
