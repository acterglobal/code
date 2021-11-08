import { LinkCountOrderByAggregateInput } from "../inputs/LinkCountOrderByAggregateInput";
import { LinkMaxOrderByAggregateInput } from "../inputs/LinkMaxOrderByAggregateInput";
import { LinkMinOrderByAggregateInput } from "../inputs/LinkMinOrderByAggregateInput";
export declare class LinkOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    acterId?: "asc" | "desc" | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
    _count?: LinkCountOrderByAggregateInput | undefined;
    _max?: LinkMaxOrderByAggregateInput | undefined;
    _min?: LinkMinOrderByAggregateInput | undefined;
}
