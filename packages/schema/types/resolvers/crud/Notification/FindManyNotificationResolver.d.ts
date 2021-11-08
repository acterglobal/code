import { GraphQLResolveInfo } from "graphql";
import { FindManyNotificationArgs } from "./args/FindManyNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class FindManyNotificationResolver {
    notifications(ctx: any, info: GraphQLResolveInfo, args: FindManyNotificationArgs): Promise<Notification[]>;
}
