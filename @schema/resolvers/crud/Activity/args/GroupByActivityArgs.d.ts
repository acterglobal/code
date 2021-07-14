import { ActivityOrderByInput } from "../../../inputs/ActivityOrderByInput";
import { ActivityScalarWhereWithAggregatesInput } from "../../../inputs/ActivityScalarWhereWithAggregatesInput";
import { ActivityWhereInput } from "../../../inputs/ActivityWhereInput";
export declare class GroupByActivityArgs {
    where?: ActivityWhereInput | undefined;
    orderBy?: ActivityOrderByInput[] | undefined;
    by: Array<"id" | "startAt" | "endAt" | "isOnline" | "isAllDay" | "activityTypeId" | "createdByUserId" | "createdAt" | "updatedAt" | "acterId" | "organiserId">;
    having?: ActivityScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
