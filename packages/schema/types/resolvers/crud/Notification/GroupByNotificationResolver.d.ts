import { GraphQLResolveInfo } from "graphql";
import { GroupByNotificationArgs } from "./args/GroupByNotificationArgs";
import { NotificationGroupBy } from "../../outputs/NotificationGroupBy";
export declare class GroupByNotificationResolver {
    groupByNotification(ctx: any, info: GraphQLResolveInfo, args: GroupByNotificationArgs): Promise<NotificationGroupBy[]>;
}
