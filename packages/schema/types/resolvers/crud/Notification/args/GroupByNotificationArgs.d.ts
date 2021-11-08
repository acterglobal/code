import { NotificationOrderByWithAggregationInput } from "../../../inputs/NotificationOrderByWithAggregationInput";
import { NotificationScalarWhereWithAggregatesInput } from "../../../inputs/NotificationScalarWhereWithAggregatesInput";
import { NotificationWhereInput } from "../../../inputs/NotificationWhereInput";
export declare class GroupByNotificationArgs {
    where?: NotificationWhereInput | undefined;
    orderBy?: NotificationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type" | "url" | "createdAt" | "updatedAt" | "sendTo" | "sentAt" | "viewedAt" | "toActerId" | "onActerId" | "postId" | "activityId">;
    having?: NotificationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
