import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InterestTypeScalarWhereWithAggregatesInput {
    AND?: InterestTypeScalarWhereWithAggregatesInput[] | undefined;
    OR?: InterestTypeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InterestTypeScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    sortOrder?: IntWithAggregatesFilter | undefined;
    parentInterestTypeId?: StringNullableWithAggregatesFilter | undefined;
}
