import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumNotificationTypeWithAggregatesFilter } from "../inputs/EnumNotificationTypeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class NotificationScalarWhereWithAggregatesInput {
    AND?: NotificationScalarWhereWithAggregatesInput[] | undefined;
    OR?: NotificationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: NotificationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    type?: EnumNotificationTypeWithAggregatesFilter | undefined;
    url?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    sendTo?: StringNullableWithAggregatesFilter | undefined;
    sentAt?: DateTimeNullableWithAggregatesFilter | undefined;
    viewedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    toActerId?: StringWithAggregatesFilter | undefined;
    onActerId?: StringWithAggregatesFilter | undefined;
    postId?: StringNullableWithAggregatesFilter | undefined;
    activityId?: StringNullableWithAggregatesFilter | undefined;
}
