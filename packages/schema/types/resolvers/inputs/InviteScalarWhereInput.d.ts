import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class InviteScalarWhereInput {
    AND?: InviteScalarWhereInput[] | undefined;
    OR?: InviteScalarWhereInput[] | undefined;
    NOT?: InviteScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    email?: StringFilter | undefined;
    message?: StringFilter | undefined;
    error?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    sentAt?: DateTimeFilter | undefined;
    acceptedAt?: DateTimeFilter | undefined;
    onActerId?: StringFilter | undefined;
    createdByUserId?: StringFilter | undefined;
}
