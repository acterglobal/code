import { InterestTypeAvgOrderByAggregateInput } from "../inputs/InterestTypeAvgOrderByAggregateInput";
import { InterestTypeCountOrderByAggregateInput } from "../inputs/InterestTypeCountOrderByAggregateInput";
import { InterestTypeMaxOrderByAggregateInput } from "../inputs/InterestTypeMaxOrderByAggregateInput";
import { InterestTypeMinOrderByAggregateInput } from "../inputs/InterestTypeMinOrderByAggregateInput";
import { InterestTypeSumOrderByAggregateInput } from "../inputs/InterestTypeSumOrderByAggregateInput";
export declare class InterestTypeOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    sortOrder?: "asc" | "desc" | undefined;
    parentInterestTypeId?: "asc" | "desc" | undefined;
    _count?: InterestTypeCountOrderByAggregateInput | undefined;
    _avg?: InterestTypeAvgOrderByAggregateInput | undefined;
    _max?: InterestTypeMaxOrderByAggregateInput | undefined;
    _min?: InterestTypeMinOrderByAggregateInput | undefined;
    _sum?: InterestTypeSumOrderByAggregateInput | undefined;
}
