import { ActerTypeCountAggregate } from "../outputs/ActerTypeCountAggregate";
import { ActerTypeMaxAggregate } from "../outputs/ActerTypeMaxAggregate";
import { ActerTypeMinAggregate } from "../outputs/ActerTypeMinAggregate";
export declare class AggregateActerType {
    _count: ActerTypeCountAggregate | null;
    _min: ActerTypeMinAggregate | null;
    _max: ActerTypeMaxAggregate | null;
}
