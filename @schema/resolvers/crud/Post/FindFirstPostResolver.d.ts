import { GraphQLResolveInfo } from "graphql";
import { FindFirstPostArgs } from "./args/FindFirstPostArgs";
import { Post } from "../../../models/Post";
export declare class FindFirstPostResolver {
    findFirstPost(ctx: any, info: GraphQLResolveInfo, args: FindFirstPostArgs): Promise<Post | null>;
}
