import { ActerOrderByWithRelationInput } from "../inputs/ActerOrderByWithRelationInput";
import { ActivityOrderByWithRelationInput } from "../inputs/ActivityOrderByWithRelationInput";
import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
export declare class NotificationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    sendTo?: "asc" | "desc" | undefined;
    sentAt?: "asc" | "desc" | undefined;
    viewedAt?: "asc" | "desc" | undefined;
    ToActer?: ActerOrderByWithRelationInput | undefined;
    toActerId?: "asc" | "desc" | undefined;
    OnActer?: ActerOrderByWithRelationInput | undefined;
    onActerId?: "asc" | "desc" | undefined;
    Post?: PostOrderByWithRelationInput | undefined;
    postId?: "asc" | "desc" | undefined;
    Activity?: ActivityOrderByWithRelationInput | undefined;
    activityId?: "asc" | "desc" | undefined;
}
