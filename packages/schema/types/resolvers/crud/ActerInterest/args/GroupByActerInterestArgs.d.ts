import { ActerInterestOrderByWithAggregationInput } from "../../../inputs/ActerInterestOrderByWithAggregationInput";
import { ActerInterestScalarWhereWithAggregatesInput } from "../../../inputs/ActerInterestScalarWhereWithAggregatesInput";
import { ActerInterestWhereInput } from "../../../inputs/ActerInterestWhereInput";
export declare class GroupByActerInterestArgs {
    where?: ActerInterestWhereInput | undefined;
    orderBy?: ActerInterestOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "updatedAt" | "createdByUserId" | "acterId" | "interestId">;
    having?: ActerInterestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
