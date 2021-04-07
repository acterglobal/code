import { ActerConnectionListRelationFilter } from "../inputs/ActerConnectionListRelationFilter";
import { ActerInterestListRelationFilter } from "../inputs/ActerInterestListRelationFilter";
import { ActerListRelationFilter } from "../inputs/ActerListRelationFilter";
import { ActerRelationFilter } from "../inputs/ActerRelationFilter";
import { ActivityListRelationFilter } from "../inputs/ActivityListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    Acter?: ActerRelationFilter | undefined;
    acterId?: StringNullableFilter | undefined;
    ActersCreated?: ActerListRelationFilter | undefined;
    ActerConnections?: ActerConnectionListRelationFilter | undefined;
    ActerInterest?: ActerInterestListRelationFilter | undefined;
    ActivitiesCreated?: ActivityListRelationFilter | undefined;
    ActersDeleted?: ActerListRelationFilter | undefined;
}
