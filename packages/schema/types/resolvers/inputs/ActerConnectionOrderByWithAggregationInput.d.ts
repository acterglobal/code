import { ActerConnectionCountOrderByAggregateInput } from "../inputs/ActerConnectionCountOrderByAggregateInput";
import { ActerConnectionMaxOrderByAggregateInput } from "../inputs/ActerConnectionMaxOrderByAggregateInput";
import { ActerConnectionMinOrderByAggregateInput } from "../inputs/ActerConnectionMinOrderByAggregateInput";
export declare class ActerConnectionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    isApproved?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
    followerActerId?: "asc" | "desc" | undefined;
    followingActerId?: "asc" | "desc" | undefined;
    _count?: ActerConnectionCountOrderByAggregateInput | undefined;
    _max?: ActerConnectionMaxOrderByAggregateInput | undefined;
    _min?: ActerConnectionMinOrderByAggregateInput | undefined;
}
