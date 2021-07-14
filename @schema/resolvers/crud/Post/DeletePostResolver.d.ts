import { GraphQLResolveInfo } from "graphql";
import { DeletePostArgs } from "./args/DeletePostArgs";
import { Post } from "../../../models/Post";
export declare class DeletePostResolver {
    deletePost(ctx: any, info: GraphQLResolveInfo, args: DeletePostArgs): Promise<Post | null>;
}
