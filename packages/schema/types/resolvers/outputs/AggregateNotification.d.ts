import { NotificationCountAggregate } from "../outputs/NotificationCountAggregate";
import { NotificationMaxAggregate } from "../outputs/NotificationMaxAggregate";
import { NotificationMinAggregate } from "../outputs/NotificationMinAggregate";
export declare class AggregateNotification {
    _count: NotificationCountAggregate | null;
    _min: NotificationMinAggregate | null;
    _max: NotificationMaxAggregate | null;
}
