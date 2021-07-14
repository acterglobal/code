import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumActerConnectionRoleFilter } from "../inputs/EnumActerConnectionRoleFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ActerConnectionScalarWhereInput {
    AND?: ActerConnectionScalarWhereInput[] | undefined;
    OR?: ActerConnectionScalarWhereInput[] | undefined;
    NOT?: ActerConnectionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    isApproved?: BoolNullableFilter | undefined;
    role?: EnumActerConnectionRoleFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    createdByUserId?: StringFilter | undefined;
    followerActerId?: StringFilter | undefined;
    followingActerId?: StringFilter | undefined;
}
