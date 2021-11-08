import { GraphQLResolveInfo } from "graphql";
import { AggregateNotificationArgs } from "./args/AggregateNotificationArgs";
import { CreateManyNotificationArgs } from "./args/CreateManyNotificationArgs";
import { CreateNotificationArgs } from "./args/CreateNotificationArgs";
import { DeleteManyNotificationArgs } from "./args/DeleteManyNotificationArgs";
import { DeleteNotificationArgs } from "./args/DeleteNotificationArgs";
import { FindFirstNotificationArgs } from "./args/FindFirstNotificationArgs";
import { FindManyNotificationArgs } from "./args/FindManyNotificationArgs";
import { FindUniqueNotificationArgs } from "./args/FindUniqueNotificationArgs";
import { GroupByNotificationArgs } from "./args/GroupByNotificationArgs";
import { UpdateManyNotificationArgs } from "./args/UpdateManyNotificationArgs";
import { UpdateNotificationArgs } from "./args/UpdateNotificationArgs";
import { UpsertNotificationArgs } from "./args/UpsertNotificationArgs";
import { Notification } from "../../../models/Notification";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNotification } from "../../outputs/AggregateNotification";
import { NotificationGroupBy } from "../../outputs/NotificationGroupBy";
export declare class NotificationCrudResolver {
    notification(ctx: any, info: GraphQLResolveInfo, args: FindUniqueNotificationArgs): Promise<Notification | null>;
    findFirstNotification(ctx: any, info: GraphQLResolveInfo, args: FindFirstNotificationArgs): Promise<Notification | null>;
    notifications(ctx: any, info: GraphQLResolveInfo, args: FindManyNotificationArgs): Promise<Notification[]>;
    createNotification(ctx: any, info: GraphQLResolveInfo, args: CreateNotificationArgs): Promise<Notification>;
    createManyNotification(ctx: any, info: GraphQLResolveInfo, args: CreateManyNotificationArgs): Promise<AffectedRowsOutput>;
    deleteNotification(ctx: any, info: GraphQLResolveInfo, args: DeleteNotificationArgs): Promise<Notification | null>;
    updateNotification(ctx: any, info: GraphQLResolveInfo, args: UpdateNotificationArgs): Promise<Notification | null>;
    deleteManyNotification(ctx: any, info: GraphQLResolveInfo, args: DeleteManyNotificationArgs): Promise<AffectedRowsOutput>;
    updateManyNotification(ctx: any, info: GraphQLResolveInfo, args: UpdateManyNotificationArgs): Promise<AffectedRowsOutput>;
    upsertNotification(ctx: any, info: GraphQLResolveInfo, args: UpsertNotificationArgs): Promise<Notification>;
    aggregateNotification(ctx: any, info: GraphQLResolveInfo, args: AggregateNotificationArgs): Promise<AggregateNotification>;
    groupByNotification(ctx: any, info: GraphQLResolveInfo, args: GroupByNotificationArgs): Promise<NotificationGroupBy[]>;
}
