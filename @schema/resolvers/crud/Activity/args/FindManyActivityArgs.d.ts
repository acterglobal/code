import { ActivityOrderByInput } from "../../../inputs/ActivityOrderByInput";
import { ActivityWhereInput } from "../../../inputs/ActivityWhereInput";
import { ActivityWhereUniqueInput } from "../../../inputs/ActivityWhereUniqueInput";
export declare class FindManyActivityArgs {
    where?: ActivityWhereInput | undefined;
    orderBy?: ActivityOrderByInput[] | undefined;
    cursor?: ActivityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "startAt" | "endAt" | "isOnline" | "isAllDay" | "createdByUserId" | "createdAt" | "updatedAt" | "acterId" | "organiserId"> | undefined;
}
