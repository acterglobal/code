import { PostCountOrderByAggregateInput } from "../inputs/PostCountOrderByAggregateInput";
import { PostMaxOrderByAggregateInput } from "../inputs/PostMaxOrderByAggregateInput";
import { PostMinOrderByAggregateInput } from "../inputs/PostMinOrderByAggregateInput";
export declare class PostOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    parentId?: "asc" | "desc" | undefined;
    acterId?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    _count?: PostCountOrderByAggregateInput | undefined;
    _max?: PostMaxOrderByAggregateInput | undefined;
    _min?: PostMinOrderByAggregateInput | undefined;
}
