import { ActerInterestCountAggregate } from "../outputs/ActerInterestCountAggregate";
import { ActerInterestMaxAggregate } from "../outputs/ActerInterestMaxAggregate";
import { ActerInterestMinAggregate } from "../outputs/ActerInterestMinAggregate";
export declare class AggregateActerInterest {
    _count: ActerInterestCountAggregate | null;
    _min: ActerInterestMinAggregate | null;
    _max: ActerInterestMaxAggregate | null;
}
