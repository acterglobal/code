import { ActerOrderByWithRelationInput } from "../inputs/ActerOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class LinkOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    Acter?: ActerOrderByWithRelationInput | undefined;
    acterId?: "asc" | "desc" | undefined;
    createdByUser?: UserOrderByWithRelationInput | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
}
