import { InterestCountAggregate } from "../outputs/InterestCountAggregate";
import { InterestMaxAggregate } from "../outputs/InterestMaxAggregate";
import { InterestMinAggregate } from "../outputs/InterestMinAggregate";
export declare class AggregateInterest {
    count: InterestCountAggregate | null;
    min: InterestMinAggregate | null;
    max: InterestMaxAggregate | null;
}
