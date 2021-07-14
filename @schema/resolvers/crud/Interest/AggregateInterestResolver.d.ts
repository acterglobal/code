import { GraphQLResolveInfo } from "graphql";
import { AggregateInterestArgs } from "./args/AggregateInterestArgs";
import { AggregateInterest } from "../../outputs/AggregateInterest";
export declare class AggregateInterestResolver {
    aggregateInterest(ctx: any, info: GraphQLResolveInfo, args: AggregateInterestArgs): Promise<AggregateInterest>;
}
