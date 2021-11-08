import { ActerTypeRuleCountOrderByAggregateInput } from "../inputs/ActerTypeRuleCountOrderByAggregateInput";
import { ActerTypeRuleMaxOrderByAggregateInput } from "../inputs/ActerTypeRuleMaxOrderByAggregateInput";
import { ActerTypeRuleMinOrderByAggregateInput } from "../inputs/ActerTypeRuleMinOrderByAggregateInput";
export declare class ActerTypeRuleOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    canCreate?: "asc" | "desc" | undefined;
    canJoin?: "asc" | "desc" | undefined;
    canBecome?: "asc" | "desc" | undefined;
    subjectActerTypeId?: "asc" | "desc" | undefined;
    objectActerTypeId?: "asc" | "desc" | undefined;
    _count?: ActerTypeRuleCountOrderByAggregateInput | undefined;
    _max?: ActerTypeRuleMaxOrderByAggregateInput | undefined;
    _min?: ActerTypeRuleMinOrderByAggregateInput | undefined;
}
