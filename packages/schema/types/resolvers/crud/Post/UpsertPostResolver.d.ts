import { GraphQLResolveInfo } from "graphql";
import { UpsertPostArgs } from "./args/UpsertPostArgs";
import { Post } from "../../../models/Post";
export declare class UpsertPostResolver {
    upsertPost(ctx: any, info: GraphQLResolveInfo, args: UpsertPostArgs): Promise<Post>;
}
