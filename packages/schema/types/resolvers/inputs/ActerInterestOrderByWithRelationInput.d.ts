import { ActerOrderByWithRelationInput } from "../inputs/ActerOrderByWithRelationInput";
import { InterestOrderByWithRelationInput } from "../inputs/InterestOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ActerInterestOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    CreatedByUser?: UserOrderByWithRelationInput | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
    Acter?: ActerOrderByWithRelationInput | undefined;
    acterId?: "asc" | "desc" | undefined;
    Interest?: InterestOrderByWithRelationInput | undefined;
    interestId?: "asc" | "desc" | undefined;
}
