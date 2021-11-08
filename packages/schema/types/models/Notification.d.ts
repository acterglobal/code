import { Acter } from "../models/Acter";
import { Activity } from "../models/Activity";
import { Post } from "../models/Post";
export declare class Notification {
    id: string;
    type: "NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER";
    url: string;
    createdAt: Date;
    updatedAt: Date;
    sendTo?: string | null;
    sentAt?: Date | null;
    viewedAt?: Date | null;
    ToActer?: Acter;
    toActerId: string;
    OnActer?: Acter;
    onActerId: string;
    Post?: Post | null;
    postId?: string | null;
    Activity?: Activity | null;
    activityId?: string | null;
}
