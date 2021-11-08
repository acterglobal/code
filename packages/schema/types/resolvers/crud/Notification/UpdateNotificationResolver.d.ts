import { GraphQLResolveInfo } from "graphql";
import { UpdateNotificationArgs } from "./args/UpdateNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class UpdateNotificationResolver {
    updateNotification(ctx: any, info: GraphQLResolveInfo, args: UpdateNotificationArgs): Promise<Notification | null>;
}
