import { Activity } from "../../../models/Activity";
import { ActivityType } from "../../../models/ActivityType";
import { ActivityTypeActivityArgs } from "./args/ActivityTypeActivityArgs";
export declare class ActivityTypeRelationsResolver {
    Activity(activityType: ActivityType, ctx: any, args: ActivityTypeActivityArgs): Promise<Activity[]>;
}
