import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ActerInterestScalarWhereWithAggregatesInput {
    AND?: ActerInterestScalarWhereWithAggregatesInput[] | undefined;
    OR?: ActerInterestScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ActerInterestScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    createdByUserId?: StringWithAggregatesFilter | undefined;
    acterId?: StringWithAggregatesFilter | undefined;
    interestId?: StringWithAggregatesFilter | undefined;
}
