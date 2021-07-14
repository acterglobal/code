import { ActerRelationFilter } from "../inputs/ActerRelationFilter";
import { ActivityTypeRelationFilter } from "../inputs/ActivityTypeRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ActivityWhereInput {
    AND?: ActivityWhereInput[] | undefined;
    OR?: ActivityWhereInput[] | undefined;
    NOT?: ActivityWhereInput[] | undefined;
    id?: StringFilter | undefined;
    startAt?: DateTimeFilter | undefined;
    endAt?: DateTimeFilter | undefined;
    isOnline?: BoolFilter | undefined;
    isAllDay?: BoolFilter | undefined;
    ActivityType?: ActivityTypeRelationFilter | undefined;
    activityTypeId?: StringFilter | undefined;
    createdByUser?: UserRelationFilter | undefined;
    createdByUserId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    Acter?: ActerRelationFilter | undefined;
    acterId?: StringNullableFilter | undefined;
    Organiser?: ActerRelationFilter | undefined;
    organiserId?: StringNullableFilter | undefined;
}
