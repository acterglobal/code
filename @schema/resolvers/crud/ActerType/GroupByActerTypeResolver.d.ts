import { GraphQLResolveInfo } from "graphql";
import { GroupByActerTypeArgs } from "./args/GroupByActerTypeArgs";
import { ActerTypeGroupBy } from "../../outputs/ActerTypeGroupBy";
export declare class GroupByActerTypeResolver {
    groupByActerType(ctx: any, info: GraphQLResolveInfo, args: GroupByActerTypeArgs): Promise<ActerTypeGroupBy[]>;
}
