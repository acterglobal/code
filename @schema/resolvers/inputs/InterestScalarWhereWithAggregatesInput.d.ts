import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InterestScalarWhereWithAggregatesInput {
    AND?: InterestScalarWhereWithAggregatesInput[] | undefined;
    OR?: InterestScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InterestScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    sdgNumber?: StringNullableWithAggregatesFilter | undefined;
    interestTypeId?: StringWithAggregatesFilter | undefined;
}
