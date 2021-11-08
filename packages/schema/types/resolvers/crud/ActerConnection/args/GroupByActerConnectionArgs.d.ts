import { ActerConnectionOrderByWithAggregationInput } from "../../../inputs/ActerConnectionOrderByWithAggregationInput";
import { ActerConnectionScalarWhereWithAggregatesInput } from "../../../inputs/ActerConnectionScalarWhereWithAggregatesInput";
import { ActerConnectionWhereInput } from "../../../inputs/ActerConnectionWhereInput";
export declare class GroupByActerConnectionArgs {
    where?: ActerConnectionWhereInput | undefined;
    orderBy?: ActerConnectionOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "isApproved" | "role" | "createdAt" | "updatedAt" | "createdByUserId" | "followerActerId" | "followingActerId">;
    having?: ActerConnectionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
