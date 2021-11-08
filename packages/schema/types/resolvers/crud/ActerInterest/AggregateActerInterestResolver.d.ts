import { GraphQLResolveInfo } from "graphql";
import { AggregateActerInterestArgs } from "./args/AggregateActerInterestArgs";
import { AggregateActerInterest } from "../../outputs/AggregateActerInterest";
export declare class AggregateActerInterestResolver {
    aggregateActerInterest(ctx: any, info: GraphQLResolveInfo, args: AggregateActerInterestArgs): Promise<AggregateActerInterest>;
}
