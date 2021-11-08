import { ActerTypeCountOrderByAggregateInput } from "../inputs/ActerTypeCountOrderByAggregateInput";
import { ActerTypeMaxOrderByAggregateInput } from "../inputs/ActerTypeMaxOrderByAggregateInput";
import { ActerTypeMinOrderByAggregateInput } from "../inputs/ActerTypeMinOrderByAggregateInput";
export declare class ActerTypeOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    _count?: ActerTypeCountOrderByAggregateInput | undefined;
    _max?: ActerTypeMaxOrderByAggregateInput | undefined;
    _min?: ActerTypeMinOrderByAggregateInput | undefined;
}
