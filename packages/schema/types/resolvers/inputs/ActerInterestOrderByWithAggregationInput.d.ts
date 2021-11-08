import { ActerInterestCountOrderByAggregateInput } from "../inputs/ActerInterestCountOrderByAggregateInput";
import { ActerInterestMaxOrderByAggregateInput } from "../inputs/ActerInterestMaxOrderByAggregateInput";
import { ActerInterestMinOrderByAggregateInput } from "../inputs/ActerInterestMinOrderByAggregateInput";
export declare class ActerInterestOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
    acterId?: "asc" | "desc" | undefined;
    interestId?: "asc" | "desc" | undefined;
    _count?: ActerInterestCountOrderByAggregateInput | undefined;
    _max?: ActerInterestMaxOrderByAggregateInput | undefined;
    _min?: ActerInterestMinOrderByAggregateInput | undefined;
}
