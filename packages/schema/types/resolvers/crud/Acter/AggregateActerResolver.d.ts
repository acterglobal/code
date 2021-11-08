import { GraphQLResolveInfo } from "graphql";
import { AggregateActerArgs } from "./args/AggregateActerArgs";
import { AggregateActer } from "../../outputs/AggregateActer";
export declare class AggregateActerResolver {
    aggregateActer(ctx: any, info: GraphQLResolveInfo, args: AggregateActerArgs): Promise<AggregateActer>;
}
