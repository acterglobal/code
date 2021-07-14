import { ActerOrderByWithRelationInput } from "../inputs/ActerOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ActerConnectionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    isApproved?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    CreatedByUser?: UserOrderByWithRelationInput | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
    Follower?: ActerOrderByWithRelationInput | undefined;
    followerActerId?: "asc" | "desc" | undefined;
    Following?: ActerOrderByWithRelationInput | undefined;
    followingActerId?: "asc" | "desc" | undefined;
}
