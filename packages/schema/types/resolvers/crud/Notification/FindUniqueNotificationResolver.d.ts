import { GraphQLResolveInfo } from "graphql";
import { FindUniqueNotificationArgs } from "./args/FindUniqueNotificationArgs";
import { Notification } from "../../../models/Notification";
export declare class FindUniqueNotificationResolver {
    notification(ctx: any, info: GraphQLResolveInfo, args: FindUniqueNotificationArgs): Promise<Notification | null>;
}
