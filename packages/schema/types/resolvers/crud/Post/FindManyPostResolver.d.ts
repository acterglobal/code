import { GraphQLResolveInfo } from "graphql";
import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { Post } from "../../../models/Post";
export declare class FindManyPostResolver {
    posts(ctx: any, info: GraphQLResolveInfo, args: FindManyPostArgs): Promise<Post[]>;
}
