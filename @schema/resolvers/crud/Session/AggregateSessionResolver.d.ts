import { GraphQLResolveInfo } from "graphql";
import { AggregateSessionArgs } from "./args/AggregateSessionArgs";
import { AggregateSession } from "../../outputs/AggregateSession";
export declare class AggregateSessionResolver {
    aggregateSession(ctx: any, info: GraphQLResolveInfo, args: AggregateSessionArgs): Promise<AggregateSession>;
}
