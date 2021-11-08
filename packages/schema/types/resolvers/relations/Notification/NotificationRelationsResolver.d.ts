import { Acter } from "../../../models/Acter";
import { Activity } from "../../../models/Activity";
import { Notification } from "../../../models/Notification";
import { Post } from "../../../models/Post";
export declare class NotificationRelationsResolver {
    ToActer(notification: Notification, ctx: any): Promise<Acter>;
    OnActer(notification: Notification, ctx: any): Promise<Acter>;
    Post(notification: Notification, ctx: any): Promise<Post | null>;
    Activity(notification: Notification, ctx: any): Promise<Activity | null>;
}
