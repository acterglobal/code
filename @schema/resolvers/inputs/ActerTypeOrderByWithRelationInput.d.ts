import { ActerOrderByRelationAggregateInput } from "../inputs/ActerOrderByRelationAggregateInput";
import { ActerTypeRuleOrderByRelationAggregateInput } from "../inputs/ActerTypeRuleOrderByRelationAggregateInput";
export declare class ActerTypeOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    Acter?: ActerOrderByRelationAggregateInput | undefined;
    ActerTypeRules?: ActerTypeRuleOrderByRelationAggregateInput | undefined;
    RulesOnActerType?: ActerTypeRuleOrderByRelationAggregateInput | undefined;
}
