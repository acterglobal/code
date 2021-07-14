import { ActerInterestCountAggregate } from "../outputs/ActerInterestCountAggregate";
import { ActerInterestMaxAggregate } from "../outputs/ActerInterestMaxAggregate";
import { ActerInterestMinAggregate } from "../outputs/ActerInterestMinAggregate";
export declare class AggregateActerInterest {
    count: ActerInterestCountAggregate | null;
    min: ActerInterestMinAggregate | null;
    max: ActerInterestMaxAggregate | null;
}
