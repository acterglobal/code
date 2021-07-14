import { ActivityTypeOrderByInput } from "../../../inputs/ActivityTypeOrderByInput";
import { ActivityTypeScalarWhereWithAggregatesInput } from "../../../inputs/ActivityTypeScalarWhereWithAggregatesInput";
import { ActivityTypeWhereInput } from "../../../inputs/ActivityTypeWhereInput";
export declare class GroupByActivityTypeArgs {
    where?: ActivityTypeWhereInput | undefined;
    orderBy?: ActivityTypeOrderByInput[] | undefined;
    by: Array<"id" | "name">;
    having?: ActivityTypeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
