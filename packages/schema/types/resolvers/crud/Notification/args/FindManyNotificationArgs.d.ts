import { NotificationOrderByWithRelationInput } from "../../../inputs/NotificationOrderByWithRelationInput";
import { NotificationWhereInput } from "../../../inputs/NotificationWhereInput";
import { NotificationWhereUniqueInput } from "../../../inputs/NotificationWhereUniqueInput";
export declare class FindManyNotificationArgs {
    where?: NotificationWhereInput | undefined;
    orderBy?: NotificationOrderByWithRelationInput[] | undefined;
    cursor?: NotificationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "url" | "createdAt" | "updatedAt" | "sendTo" | "sentAt" | "viewedAt" | "toActerId" | "onActerId" | "postId" | "activityId"> | undefined;
}
