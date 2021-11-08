import { ActerRelationFilter } from "../inputs/ActerRelationFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumActerConnectionRoleFilter } from "../inputs/EnumActerConnectionRoleFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ActerConnectionWhereInput {
    AND?: ActerConnectionWhereInput[] | undefined;
    OR?: ActerConnectionWhereInput[] | undefined;
    NOT?: ActerConnectionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    isApproved?: BoolNullableFilter | undefined;
    role?: EnumActerConnectionRoleFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    CreatedByUser?: UserRelationFilter | undefined;
    createdByUserId?: StringFilter | undefined;
    Follower?: ActerRelationFilter | undefined;
    followerActerId?: StringFilter | undefined;
    Following?: ActerRelationFilter | undefined;
    followingActerId?: StringFilter | undefined;
}
