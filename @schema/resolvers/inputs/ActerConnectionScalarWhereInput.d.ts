import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ActerConnectionScalarWhereInput {
    AND?: ActerConnectionScalarWhereInput[] | undefined;
    OR?: ActerConnectionScalarWhereInput[] | undefined;
    NOT?: ActerConnectionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    isApproved?: BoolNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    createdByUserId?: StringFilter | undefined;
    followerActerId?: StringFilter | undefined;
    followingActerId?: StringFilter | undefined;
}
