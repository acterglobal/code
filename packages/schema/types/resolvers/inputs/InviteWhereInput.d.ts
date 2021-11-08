import { ActerRelationFilter } from "../inputs/ActerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class InviteWhereInput {
    AND?: InviteWhereInput[] | undefined;
    OR?: InviteWhereInput[] | undefined;
    NOT?: InviteWhereInput[] | undefined;
    id?: StringFilter | undefined;
    email?: StringFilter | undefined;
    message?: StringFilter | undefined;
    error?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    sentAt?: DateTimeFilter | undefined;
    acceptedAt?: DateTimeFilter | undefined;
    OnActer?: ActerRelationFilter | undefined;
    onActerId?: StringFilter | undefined;
    createdByUser?: UserRelationFilter | undefined;
    createdByUserId?: StringFilter | undefined;
}
