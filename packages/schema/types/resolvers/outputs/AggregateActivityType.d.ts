import { ActivityTypeCountAggregate } from "../outputs/ActivityTypeCountAggregate";
import { ActivityTypeMaxAggregate } from "../outputs/ActivityTypeMaxAggregate";
import { ActivityTypeMinAggregate } from "../outputs/ActivityTypeMinAggregate";
export declare class AggregateActivityType {
    _count: ActivityTypeCountAggregate | null;
    _min: ActivityTypeMinAggregate | null;
    _max: ActivityTypeMaxAggregate | null;
}
