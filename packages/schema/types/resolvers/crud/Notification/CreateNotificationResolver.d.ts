import { GraphQLResolveInfo } from "graphql";
import { CreateNotificationArgs } from "./args/CreateNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class CreateNotificationResolver {
    createNotification(ctx: any, info: GraphQLResolveInfo, args: CreateNotificationArgs): Promise<Notification>;
}
