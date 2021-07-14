import { ActerInterestOrderByRelationAggregateInput } from "../inputs/ActerInterestOrderByRelationAggregateInput";
import { InterestTypeOrderByWithRelationInput } from "../inputs/InterestTypeOrderByWithRelationInput";
export declare class InterestOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    sdgNumber?: "asc" | "desc" | undefined;
    InterestType?: InterestTypeOrderByWithRelationInput | undefined;
    interestTypeId?: "asc" | "desc" | undefined;
    InterestActers?: ActerInterestOrderByRelationAggregateInput | undefined;
}
