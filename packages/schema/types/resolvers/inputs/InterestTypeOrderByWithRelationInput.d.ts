import { InterestOrderByRelationAggregateInput } from "../inputs/InterestOrderByRelationAggregateInput";
import { InterestTypeOrderByRelationAggregateInput } from "../inputs/InterestTypeOrderByRelationAggregateInput";
export declare class InterestTypeOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    parent?: InterestTypeOrderByWithRelationInput | undefined;
    children?: InterestTypeOrderByRelationAggregateInput | undefined;
    sortOrder?: "asc" | "desc" | undefined;
    parentInterestTypeId?: "asc" | "desc" | undefined;
    Interests?: InterestOrderByRelationAggregateInput | undefined;
}
