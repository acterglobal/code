import { InviteCountOrderByAggregateInput } from "../inputs/InviteCountOrderByAggregateInput";
import { InviteMaxOrderByAggregateInput } from "../inputs/InviteMaxOrderByAggregateInput";
import { InviteMinOrderByAggregateInput } from "../inputs/InviteMinOrderByAggregateInput";
export declare class InviteOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    message?: "asc" | "desc" | undefined;
    error?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    sentAt?: "asc" | "desc" | undefined;
    acceptedAt?: "asc" | "desc" | undefined;
    onActerId?: "asc" | "desc" | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
    _count?: InviteCountOrderByAggregateInput | undefined;
    _max?: InviteMaxOrderByAggregateInput | undefined;
    _min?: InviteMinOrderByAggregateInput | undefined;
}
