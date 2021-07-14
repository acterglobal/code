import { GraphQLResolveInfo } from "graphql";
import { UpdatePostArgs } from "./args/UpdatePostArgs";
import { Post } from "../../../models/Post";
export declare class UpdatePostResolver {
    updatePost(ctx: any, info: GraphQLResolveInfo, args: UpdatePostArgs): Promise<Post | null>;
}
