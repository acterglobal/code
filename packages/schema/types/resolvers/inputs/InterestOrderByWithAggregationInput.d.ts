import { InterestCountOrderByAggregateInput } from "../inputs/InterestCountOrderByAggregateInput";
import { InterestMaxOrderByAggregateInput } from "../inputs/InterestMaxOrderByAggregateInput";
import { InterestMinOrderByAggregateInput } from "../inputs/InterestMinOrderByAggregateInput";
export declare class InterestOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    sdgNumber?: "asc" | "desc" | undefined;
    interestTypeId?: "asc" | "desc" | undefined;
    _count?: InterestCountOrderByAggregateInput | undefined;
    _max?: InterestMaxOrderByAggregateInput | undefined;
    _min?: InterestMinOrderByAggregateInput | undefined;
}
