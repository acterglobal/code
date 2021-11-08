import { ActivityTypeOrderByWithAggregationInput } from "../../../inputs/ActivityTypeOrderByWithAggregationInput";
import { ActivityTypeScalarWhereWithAggregatesInput } from "../../../inputs/ActivityTypeScalarWhereWithAggregatesInput";
import { ActivityTypeWhereInput } from "../../../inputs/ActivityTypeWhereInput";
export declare class GroupByActivityTypeArgs {
    where?: ActivityTypeWhereInput | undefined;
    orderBy?: ActivityTypeOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name">;
    having?: ActivityTypeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
