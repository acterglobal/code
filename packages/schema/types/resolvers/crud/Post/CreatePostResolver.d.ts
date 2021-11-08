import { GraphQLResolveInfo } from "graphql";
import { CreatePostArgs } from "./args/CreatePostArgs";
import { Post } from "../../../models/Post";
export declare class CreatePostResolver {
    createPost(ctx: any, info: GraphQLResolveInfo, args: CreatePostArgs): Promise<Post>;
}
