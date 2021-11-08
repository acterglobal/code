import { GraphQLResolveInfo } from "graphql";
import { FindFirstNotificationArgs } from "./args/FindFirstNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class FindFirstNotificationResolver {
    findFirstNotification(ctx: any, info: GraphQLResolveInfo, args: FindFirstNotificationArgs): Promise<Notification | null>;
}
