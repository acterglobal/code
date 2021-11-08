import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ActivityScalarWhereInput {
    AND?: ActivityScalarWhereInput[] | undefined;
    OR?: ActivityScalarWhereInput[] | undefined;
    NOT?: ActivityScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    startAt?: DateTimeFilter | undefined;
    endAt?: DateTimeFilter | undefined;
    isOnline?: BoolFilter | undefined;
    isAllDay?: BoolFilter | undefined;
    activityTypeId?: StringFilter | undefined;
    createdByUserId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    acterId?: StringNullableFilter | undefined;
    organiserId?: StringNullableFilter | undefined;
}
