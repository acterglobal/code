import { GraphQLResolveInfo } from "graphql";
import { DeleteNotificationArgs } from "./args/DeleteNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class DeleteNotificationResolver {
    deleteNotification(ctx: any, info: GraphQLResolveInfo, args: DeleteNotificationArgs): Promise<Notification | null>;
}
