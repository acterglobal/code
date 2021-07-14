import { ActivityTypeCountAggregate } from "../outputs/ActivityTypeCountAggregate";
import { ActivityTypeMaxAggregate } from "../outputs/ActivityTypeMaxAggregate";
import { ActivityTypeMinAggregate } from "../outputs/ActivityTypeMinAggregate";
export declare class ActivityTypeGroupBy {
    id: string;
    name: string;
    count: ActivityTypeCountAggregate | null;
    min: ActivityTypeMinAggregate | null;
    max: ActivityTypeMaxAggregate | null;
}
