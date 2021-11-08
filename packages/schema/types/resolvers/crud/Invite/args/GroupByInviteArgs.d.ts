import { InviteOrderByWithAggregationInput } from "../../../inputs/InviteOrderByWithAggregationInput";
import { InviteScalarWhereWithAggregatesInput } from "../../../inputs/InviteScalarWhereWithAggregatesInput";
import { InviteWhereInput } from "../../../inputs/InviteWhereInput";
export declare class GroupByInviteArgs {
    where?: InviteWhereInput | undefined;
    orderBy?: InviteOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "email" | "message" | "error" | "createdAt" | "updatedAt" | "sentAt" | "acceptedAt" | "onActerId" | "createdByUserId">;
    having?: InviteScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
