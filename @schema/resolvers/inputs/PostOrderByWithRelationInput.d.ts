import { ActerOrderByWithRelationInput } from "../inputs/ActerOrderByWithRelationInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
export declare class PostOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    Parent?: PostOrderByWithRelationInput | undefined;
    parentId?: "asc" | "desc" | undefined;
    Comments?: PostOrderByRelationAggregateInput | undefined;
    Acter?: ActerOrderByWithRelationInput | undefined;
    acterId?: "asc" | "desc" | undefined;
    Author?: ActerOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
}
