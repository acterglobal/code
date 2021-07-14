import { GraphQLResolveInfo } from "graphql";
import { AggregateLinkArgs } from "./args/AggregateLinkArgs";
import { AggregateLink } from "../../outputs/AggregateLink";
export declare class AggregateLinkResolver {
    aggregateLink(ctx: any, info: GraphQLResolveInfo, args: AggregateLinkArgs): Promise<AggregateLink>;
}
