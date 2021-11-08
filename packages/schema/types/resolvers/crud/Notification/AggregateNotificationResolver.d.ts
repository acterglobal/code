import { GraphQLResolveInfo } from "graphql";
import { AggregateNotificationArgs } from "./args/AggregateNotificationArgs";
import { AggregateNotification } from "../../outputs/AggregateNotification";
export declare class AggregateNotificationResolver {
    aggregateNotification(ctx: any, info: GraphQLResolveInfo, args: AggregateNotificationArgs): Promise<AggregateNotification>;
}
