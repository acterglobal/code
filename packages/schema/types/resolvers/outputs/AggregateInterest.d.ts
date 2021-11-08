import { InterestCountAggregate } from "../outputs/InterestCountAggregate";
import { InterestMaxAggregate } from "../outputs/InterestMaxAggregate";
import { InterestMinAggregate } from "../outputs/InterestMinAggregate";
export declare class AggregateInterest {
    _count: InterestCountAggregate | null;
    _min: InterestMinAggregate | null;
    _max: InterestMaxAggregate | null;
}
