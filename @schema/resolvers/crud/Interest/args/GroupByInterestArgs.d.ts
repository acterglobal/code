import { InterestOrderByInput } from "../../../inputs/InterestOrderByInput";
import { InterestScalarWhereWithAggregatesInput } from "../../../inputs/InterestScalarWhereWithAggregatesInput";
import { InterestWhereInput } from "../../../inputs/InterestWhereInput";
export declare class GroupByInterestArgs {
    where?: InterestWhereInput | undefined;
    orderBy?: InterestOrderByInput[] | undefined;
    by: Array<"id" | "name" | "description" | "sdgNumber" | "interestTypeId">;
    having?: InterestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
