import { InterestTypeAvgAggregate } from "../outputs/InterestTypeAvgAggregate";
import { InterestTypeCountAggregate } from "../outputs/InterestTypeCountAggregate";
import { InterestTypeMaxAggregate } from "../outputs/InterestTypeMaxAggregate";
import { InterestTypeMinAggregate } from "../outputs/InterestTypeMinAggregate";
import { InterestTypeSumAggregate } from "../outputs/InterestTypeSumAggregate";
export declare class AggregateInterestType {
    _count: InterestTypeCountAggregate | null;
    _avg: InterestTypeAvgAggregate | null;
    _sum: InterestTypeSumAggregate | null;
    _min: InterestTypeMinAggregate | null;
    _max: InterestTypeMaxAggregate | null;
}
