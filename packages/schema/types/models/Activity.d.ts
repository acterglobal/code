import { Acter } from "../models/Acter";
import { ActivityType } from "../models/ActivityType";
import { Notification } from "../models/Notification";
import { User } from "../models/User";
import { ActivityCount } from "../resolvers/outputs/ActivityCount";
export declare class Activity {
    id: string;
    startAt: Date;
    endAt: Date;
    isOnline: boolean;
    isAllDay: boolean;
    ActivityType?: ActivityType;
    activityTypeId: string;
    createdByUser?: User;
    createdByUserId: string;
    createdAt: Date;
    updatedAt: Date;
    Acter?: Acter | null;
    acterId?: string | null;
    Organiser?: Acter | null;
    organiserId?: string | null;
    Notification?: Notification[];
    _count?: ActivityCount | null;
}
