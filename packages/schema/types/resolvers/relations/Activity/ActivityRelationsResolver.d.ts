import { Acter } from "../../../models/Acter";
import { Activity } from "../../../models/Activity";
import { ActivityType } from "../../../models/ActivityType";
import { Notification } from "../../../models/Notification";
import { User } from "../../../models/User";
import { ActivityNotificationArgs } from "./args/ActivityNotificationArgs";
export declare class ActivityRelationsResolver {
    ActivityType(activity: Activity, ctx: any): Promise<ActivityType>;
    createdByUser(activity: Activity, ctx: any): Promise<User>;
    Acter(activity: Activity, ctx: any): Promise<Acter | null>;
    Organiser(activity: Activity, ctx: any): Promise<Acter | null>;
    Notification(activity: Activity, ctx: any, args: ActivityNotificationArgs): Promise<Notification[]>;
}
