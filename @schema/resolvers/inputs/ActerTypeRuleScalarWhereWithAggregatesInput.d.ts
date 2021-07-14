import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ActerTypeRuleScalarWhereWithAggregatesInput {
    AND?: ActerTypeRuleScalarWhereWithAggregatesInput[] | undefined;
    OR?: ActerTypeRuleScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ActerTypeRuleScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    canCreate?: BoolWithAggregatesFilter | undefined;
    canJoin?: BoolWithAggregatesFilter | undefined;
    canBecome?: BoolWithAggregatesFilter | undefined;
    subjectActerTypeId?: StringWithAggregatesFilter | undefined;
    objectActerTypeId?: StringWithAggregatesFilter | undefined;
}
