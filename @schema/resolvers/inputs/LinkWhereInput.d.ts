import { ActerRelationFilter } from "../inputs/ActerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class LinkWhereInput {
    AND?: LinkWhereInput[] | undefined;
    OR?: LinkWhereInput[] | undefined;
    NOT?: LinkWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    url?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    Acter?: ActerRelationFilter | undefined;
    acterId?: StringFilter | undefined;
    createdByUser?: UserRelationFilter | undefined;
    createdByUserId?: StringFilter | undefined;
}
