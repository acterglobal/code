import { ActivityTypeOrderByWithRelationInput } from "../../../inputs/ActivityTypeOrderByWithRelationInput";
import { ActivityTypeWhereInput } from "../../../inputs/ActivityTypeWhereInput";
import { ActivityTypeWhereUniqueInput } from "../../../inputs/ActivityTypeWhereUniqueInput";
export declare class FindFirstActivityTypeArgs {
    where?: ActivityTypeWhereInput | undefined;
    orderBy?: ActivityTypeOrderByWithRelationInput[] | undefined;
    cursor?: ActivityTypeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name"> | undefined;
}
