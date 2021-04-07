import { ActerTypeCountAggregate } from "../outputs/ActerTypeCountAggregate";
import { ActerTypeMaxAggregate } from "../outputs/ActerTypeMaxAggregate";
import { ActerTypeMinAggregate } from "../outputs/ActerTypeMinAggregate";
export declare class AggregateActerType {
    count: ActerTypeCountAggregate | null;
    min: ActerTypeMinAggregate | null;
    max: ActerTypeMaxAggregate | null;
}
