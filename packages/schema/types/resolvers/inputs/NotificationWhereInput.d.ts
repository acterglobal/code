import { ActerRelationFilter } from "../inputs/ActerRelationFilter";
import { ActivityRelationFilter } from "../inputs/ActivityRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumNotificationTypeFilter } from "../inputs/EnumNotificationTypeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class NotificationWhereInput {
    AND?: NotificationWhereInput[] | undefined;
    OR?: NotificationWhereInput[] | undefined;
    NOT?: NotificationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumNotificationTypeFilter | undefined;
    url?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    sendTo?: StringNullableFilter | undefined;
    sentAt?: DateTimeNullableFilter | undefined;
    viewedAt?: DateTimeNullableFilter | undefined;
    ToActer?: ActerRelationFilter | undefined;
    toActerId?: StringFilter | undefined;
    OnActer?: ActerRelationFilter | undefined;
    onActerId?: StringFilter | undefined;
    Post?: PostRelationFilter | undefined;
    postId?: StringNullableFilter | undefined;
    Activity?: ActivityRelationFilter | undefined;
    activityId?: StringNullableFilter | undefined;
}
