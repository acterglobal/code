import { InterestTypeOrderByInput } from "../../../inputs/InterestTypeOrderByInput";
import { InterestTypeScalarWhereWithAggregatesInput } from "../../../inputs/InterestTypeScalarWhereWithAggregatesInput";
import { InterestTypeWhereInput } from "../../../inputs/InterestTypeWhereInput";
export declare class GroupByInterestTypeArgs {
    where?: InterestTypeWhereInput | undefined;
    orderBy?: InterestTypeOrderByInput[] | undefined;
    by: Array<"id" | "name" | "sortOrder" | "parentInterestTypeId">;
    having?: InterestTypeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
