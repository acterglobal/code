import { Acter } from "../models/Acter";
import { User } from "../models/User";
export declare class Activity {
    id: string;
    startAt: Date;
    endAt: Date;
    isOnline: boolean;
    isAllDay: boolean;
    createdByUser?: User;
    createdByUserId: string;
    createdAt: Date;
    updatedAt: Date;
    Acter?: Acter | null;
    acterId?: string | null;
    Organiser?: Acter | null;
    organiserId?: string | null;
}
