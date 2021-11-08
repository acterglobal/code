import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LinkScalarWhereWithAggregatesInput {
    AND?: LinkScalarWhereWithAggregatesInput[] | undefined;
    OR?: LinkScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LinkScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    url?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    acterId?: StringWithAggregatesFilter | undefined;
    createdByUserId?: StringWithAggregatesFilter | undefined;
}
