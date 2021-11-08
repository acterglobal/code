import { ActivityTypeCountOrderByAggregateInput } from "../inputs/ActivityTypeCountOrderByAggregateInput";
import { ActivityTypeMaxOrderByAggregateInput } from "../inputs/ActivityTypeMaxOrderByAggregateInput";
import { ActivityTypeMinOrderByAggregateInput } from "../inputs/ActivityTypeMinOrderByAggregateInput";
export declare class ActivityTypeOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    _count?: ActivityTypeCountOrderByAggregateInput | undefined;
    _max?: ActivityTypeMaxOrderByAggregateInput | undefined;
    _min?: ActivityTypeMinOrderByAggregateInput | undefined;
}
