import { ActivityCountOrderByAggregateInput } from "../inputs/ActivityCountOrderByAggregateInput";
import { ActivityMaxOrderByAggregateInput } from "../inputs/ActivityMaxOrderByAggregateInput";
import { ActivityMinOrderByAggregateInput } from "../inputs/ActivityMinOrderByAggregateInput";
export declare class ActivityOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    startAt?: "asc" | "desc" | undefined;
    endAt?: "asc" | "desc" | undefined;
    isOnline?: "asc" | "desc" | undefined;
    isAllDay?: "asc" | "desc" | undefined;
    activityTypeId?: "asc" | "desc" | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    acterId?: "asc" | "desc" | undefined;
    organiserId?: "asc" | "desc" | undefined;
    _count?: ActivityCountOrderByAggregateInput | undefined;
    _max?: ActivityMaxOrderByAggregateInput | undefined;
    _min?: ActivityMinOrderByAggregateInput | undefined;
}
