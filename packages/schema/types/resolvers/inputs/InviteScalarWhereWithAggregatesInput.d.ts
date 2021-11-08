import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InviteScalarWhereWithAggregatesInput {
    AND?: InviteScalarWhereWithAggregatesInput[] | undefined;
    OR?: InviteScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InviteScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    message?: StringWithAggregatesFilter | undefined;
    error?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    sentAt?: DateTimeWithAggregatesFilter | undefined;
    acceptedAt?: DateTimeWithAggregatesFilter | undefined;
    onActerId?: StringWithAggregatesFilter | undefined;
    createdByUserId?: StringWithAggregatesFilter | undefined;
}
