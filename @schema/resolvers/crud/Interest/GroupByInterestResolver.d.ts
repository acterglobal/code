import { GraphQLResolveInfo } from "graphql";
import { GroupByInterestArgs } from "./args/GroupByInterestArgs";
import { InterestGroupBy } from "../../outputs/InterestGroupBy";
export declare class GroupByInterestResolver {
    groupByInterest(ctx: any, info: GraphQLResolveInfo, args: GroupByInterestArgs): Promise<InterestGroupBy[]>;
}
