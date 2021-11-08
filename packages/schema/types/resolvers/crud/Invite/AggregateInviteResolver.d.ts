import { GraphQLResolveInfo } from "graphql";
import { AggregateInviteArgs } from "./args/AggregateInviteArgs";
import { AggregateInvite } from "../../outputs/AggregateInvite";
export declare class AggregateInviteResolver {
    aggregateInvite(ctx: any, info: GraphQLResolveInfo, args: AggregateInviteArgs): Promise<AggregateInvite>;
}
