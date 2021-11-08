import { GraphQLResolveInfo } from "graphql";
import { AggregateActerConnectionArgs } from "./args/AggregateActerConnectionArgs";
import { AggregateActerConnection } from "../../outputs/AggregateActerConnection";
export declare class AggregateActerConnectionResolver {
    aggregateActerConnection(ctx: any, info: GraphQLResolveInfo, args: AggregateActerConnectionArgs): Promise<AggregateActerConnection>;
}
