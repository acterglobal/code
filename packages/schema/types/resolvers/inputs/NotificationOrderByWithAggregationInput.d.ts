import { NotificationCountOrderByAggregateInput } from "../inputs/NotificationCountOrderByAggregateInput";
import { NotificationMaxOrderByAggregateInput } from "../inputs/NotificationMaxOrderByAggregateInput";
import { NotificationMinOrderByAggregateInput } from "../inputs/NotificationMinOrderByAggregateInput";
export declare class NotificationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    sendTo?: "asc" | "desc" | undefined;
    sentAt?: "asc" | "desc" | undefined;
    viewedAt?: "asc" | "desc" | undefined;
    toActerId?: "asc" | "desc" | undefined;
    onActerId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    activityId?: "asc" | "desc" | undefined;
    _count?: NotificationCountOrderByAggregateInput | undefined;
    _max?: NotificationMaxOrderByAggregateInput | undefined;
    _min?: NotificationMinOrderByAggregateInput | undefined;
}
