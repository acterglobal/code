import { GraphQLResolveInfo } from "graphql";
import { GroupByActerArgs } from "./args/GroupByActerArgs";
import { ActerGroupBy } from "../../outputs/ActerGroupBy";
export declare class GroupByActerResolver {
    groupByActer(ctx: any, info: GraphQLResolveInfo, args: GroupByActerArgs): Promise<ActerGroupBy[]>;
}
