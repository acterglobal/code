import { InterestOrderByWithAggregationInput } from "../../../inputs/InterestOrderByWithAggregationInput";
import { InterestScalarWhereWithAggregatesInput } from "../../../inputs/InterestScalarWhereWithAggregatesInput";
import { InterestWhereInput } from "../../../inputs/InterestWhereInput";
export declare class GroupByInterestArgs {
    where?: InterestWhereInput | undefined;
    orderBy?: InterestOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "sdgNumber" | "interestTypeId">;
    having?: InterestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
