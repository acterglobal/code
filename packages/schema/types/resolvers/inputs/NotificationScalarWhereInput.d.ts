import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumNotificationTypeFilter } from "../inputs/EnumNotificationTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class NotificationScalarWhereInput {
    AND?: NotificationScalarWhereInput[] | undefined;
    OR?: NotificationScalarWhereInput[] | undefined;
    NOT?: NotificationScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumNotificationTypeFilter | undefined;
    url?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    sendTo?: StringNullableFilter | undefined;
    sentAt?: DateTimeNullableFilter | undefined;
    viewedAt?: DateTimeNullableFilter | undefined;
    toActerId?: StringFilter | undefined;
    onActerId?: StringFilter | undefined;
    postId?: StringNullableFilter | undefined;
    activityId?: StringNullableFilter | undefined;
}
