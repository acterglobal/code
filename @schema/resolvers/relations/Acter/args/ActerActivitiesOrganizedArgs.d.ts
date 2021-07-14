import { ActivityOrderByWithRelationInput } from "../../../inputs/ActivityOrderByWithRelationInput";
import { ActivityWhereInput } from "../../../inputs/ActivityWhereInput";
import { ActivityWhereUniqueInput } from "../../../inputs/ActivityWhereUniqueInput";
export declare class ActerActivitiesOrganizedArgs {
    where?: ActivityWhereInput | undefined;
    orderBy?: ActivityOrderByWithRelationInput[] | undefined;
    cursor?: ActivityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "startAt" | "endAt" | "isOnline" | "isAllDay" | "activityTypeId" | "createdByUserId" | "createdAt" | "updatedAt" | "acterId" | "organiserId"> | undefined;
}
