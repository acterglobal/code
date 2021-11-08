import { ActerOrderByWithRelationInput } from "../inputs/ActerOrderByWithRelationInput";
import { ActivityTypeOrderByWithRelationInput } from "../inputs/ActivityTypeOrderByWithRelationInput";
import { NotificationOrderByRelationAggregateInput } from "../inputs/NotificationOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ActivityOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    startAt?: "asc" | "desc" | undefined;
    endAt?: "asc" | "desc" | undefined;
    isOnline?: "asc" | "desc" | undefined;
    isAllDay?: "asc" | "desc" | undefined;
    ActivityType?: ActivityTypeOrderByWithRelationInput | undefined;
    activityTypeId?: "asc" | "desc" | undefined;
    createdByUser?: UserOrderByWithRelationInput | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    Acter?: ActerOrderByWithRelationInput | undefined;
    acterId?: "asc" | "desc" | undefined;
    Organiser?: ActerOrderByWithRelationInput | undefined;
    organiserId?: "asc" | "desc" | undefined;
    Notification?: NotificationOrderByRelationAggregateInput | undefined;
}
