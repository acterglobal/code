import { GraphQLResolveInfo } from "graphql";
import { GroupByActerInterestArgs } from "./args/GroupByActerInterestArgs";
import { ActerInterestGroupBy } from "../../outputs/ActerInterestGroupBy";
export declare class GroupByActerInterestResolver {
    groupByActerInterest(ctx: any, info: GraphQLResolveInfo, args: GroupByActerInterestArgs): Promise<ActerInterestGroupBy[]>;
}
