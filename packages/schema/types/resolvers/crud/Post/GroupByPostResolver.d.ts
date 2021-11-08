import { GraphQLResolveInfo } from "graphql";
import { GroupByPostArgs } from "./args/GroupByPostArgs";
import { PostGroupBy } from "../../outputs/PostGroupBy";
export declare class GroupByPostResolver {
    groupByPost(ctx: any, info: GraphQLResolveInfo, args: GroupByPostArgs): Promise<PostGroupBy[]>;
}
