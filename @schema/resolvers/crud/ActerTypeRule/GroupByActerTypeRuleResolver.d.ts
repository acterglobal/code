import { GraphQLResolveInfo } from "graphql";
import { GroupByActerTypeRuleArgs } from "./args/GroupByActerTypeRuleArgs";
import { ActerTypeRuleGroupBy } from "../../outputs/ActerTypeRuleGroupBy";
export declare class GroupByActerTypeRuleResolver {
    groupByActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: GroupByActerTypeRuleArgs): Promise<ActerTypeRuleGroupBy[]>;
}
