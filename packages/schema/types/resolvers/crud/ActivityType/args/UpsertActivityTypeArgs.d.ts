import { ActivityTypeCreateInput } from "../../../inputs/ActivityTypeCreateInput";
import { ActivityTypeUpdateInput } from "../../../inputs/ActivityTypeUpdateInput";
import { ActivityTypeWhereUniqueInput } from "../../../inputs/ActivityTypeWhereUniqueInput";
export declare class UpsertActivityTypeArgs {
    where: ActivityTypeWhereUniqueInput;
    create: ActivityTypeCreateInput;
    update: ActivityTypeUpdateInput;
}
