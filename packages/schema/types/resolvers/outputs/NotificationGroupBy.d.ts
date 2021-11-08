import { NotificationCountAggregate } from "../outputs/NotificationCountAggregate";
import { NotificationMaxAggregate } from "../outputs/NotificationMaxAggregate";
import { NotificationMinAggregate } from "../outputs/NotificationMinAggregate";
export declare class NotificationGroupBy {
    id: string;
    type: "NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER";
    url: string;
    createdAt: Date;
    updatedAt: Date;
    sendTo: string | null;
    sentAt: Date | null;
    viewedAt: Date | null;
    toActerId: string;
    onActerId: string;
    postId: string | null;
    activityId: string | null;
    _count: NotificationCountAggregate | null;
    _min: NotificationMinAggregate | null;
    _max: NotificationMaxAggregate | null;
}
