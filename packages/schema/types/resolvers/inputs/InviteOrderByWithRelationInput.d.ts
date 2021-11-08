import { ActerOrderByWithRelationInput } from "../inputs/ActerOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class InviteOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    message?: "asc" | "desc" | undefined;
    error?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    sentAt?: "asc" | "desc" | undefined;
    acceptedAt?: "asc" | "desc" | undefined;
    OnActer?: ActerOrderByWithRelationInput | undefined;
    onActerId?: "asc" | "desc" | undefined;
    createdByUser?: UserOrderByWithRelationInput | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
}
