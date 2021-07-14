import { ActivityTypeCountAggregate } from "../outputs/ActivityTypeCountAggregate";
import { ActivityTypeMaxAggregate } from "../outputs/ActivityTypeMaxAggregate";
import { ActivityTypeMinAggregate } from "../outputs/ActivityTypeMinAggregate";
export declare class AggregateActivityType {
    count: ActivityTypeCountAggregate | null;
    min: ActivityTypeMinAggregate | null;
    max: ActivityTypeMaxAggregate | null;
}
