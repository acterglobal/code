import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ActivityScalarWhereWithAggregatesInput {
    AND?: ActivityScalarWhereWithAggregatesInput[] | undefined;
    OR?: ActivityScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ActivityScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    startAt?: DateTimeWithAggregatesFilter | undefined;
    endAt?: DateTimeWithAggregatesFilter | undefined;
    isOnline?: BoolWithAggregatesFilter | undefined;
    isAllDay?: BoolWithAggregatesFilter | undefined;
    activityTypeId?: StringWithAggregatesFilter | undefined;
    createdByUserId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    acterId?: StringNullableWithAggregatesFilter | undefined;
    organiserId?: StringNullableWithAggregatesFilter | undefined;
}
