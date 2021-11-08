import { GraphQLResolveInfo } from "graphql";
import { UpsertNotificationArgs } from "./args/UpsertNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class UpsertNotificationResolver {
    upsertNotification(ctx: any, info: GraphQLResolveInfo, args: UpsertNotificationArgs): Promise<Notification>;
}
