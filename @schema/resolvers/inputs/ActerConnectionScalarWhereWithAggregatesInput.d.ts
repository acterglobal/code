import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumActerConnectionRoleWithAggregatesFilter } from "../inputs/EnumActerConnectionRoleWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ActerConnectionScalarWhereWithAggregatesInput {
    AND?: ActerConnectionScalarWhereWithAggregatesInput[] | undefined;
    OR?: ActerConnectionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ActerConnectionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    isApproved?: BoolNullableWithAggregatesFilter | undefined;
    role?: EnumActerConnectionRoleWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    createdByUserId?: StringWithAggregatesFilter | undefined;
    followerActerId?: StringWithAggregatesFilter | undefined;
    followingActerId?: StringWithAggregatesFilter | undefined;
}
