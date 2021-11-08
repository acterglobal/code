import { ActivityCountAggregate } from "../outputs/ActivityCountAggregate";
import { ActivityMaxAggregate } from "../outputs/ActivityMaxAggregate";
import { ActivityMinAggregate } from "../outputs/ActivityMinAggregate";
export declare class ActivityGroupBy {
    id: string;
    startAt: Date;
    endAt: Date;
    isOnline: boolean;
    isAllDay: boolean;
    activityTypeId: string;
    createdByUserId: string;
    createdAt: Date;
    updatedAt: Date;
    acterId: string | null;
    organiserId: string | null;
    _count: ActivityCountAggregate | null;
    _min: ActivityMinAggregate | null;
    _max: ActivityMaxAggregate | null;
}
