import { ActerInterestOrderByInput } from "../../../inputs/ActerInterestOrderByInput";
import { ActerInterestScalarWhereWithAggregatesInput } from "../../../inputs/ActerInterestScalarWhereWithAggregatesInput";
import { ActerInterestWhereInput } from "../../../inputs/ActerInterestWhereInput";
export declare class GroupByActerInterestArgs {
    where?: ActerInterestWhereInput | undefined;
    orderBy?: ActerInterestOrderByInput[] | undefined;
    by: Array<"id" | "createdAt" | "updatedAt" | "createdByUserId" | "acterId" | "interestId">;
    having?: ActerInterestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
