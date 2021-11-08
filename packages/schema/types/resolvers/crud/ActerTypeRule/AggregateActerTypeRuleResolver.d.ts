import { GraphQLResolveInfo } from "graphql";
import { AggregateActerTypeRuleArgs } from "./args/AggregateActerTypeRuleArgs";
import { AggregateActerTypeRule } from "../../outputs/AggregateActerTypeRule";
export declare class AggregateActerTypeRuleResolver {
    aggregateActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: AggregateActerTypeRuleArgs): Promise<AggregateActerTypeRule>;
}
