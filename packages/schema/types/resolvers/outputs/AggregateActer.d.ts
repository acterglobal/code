import { ActerAvgAggregate } from "../outputs/ActerAvgAggregate";
import { ActerCountAggregate } from "../outputs/ActerCountAggregate";
import { ActerMaxAggregate } from "../outputs/ActerMaxAggregate";
import { ActerMinAggregate } from "../outputs/ActerMinAggregate";
import { ActerSumAggregate } from "../outputs/ActerSumAggregate";
export declare class AggregateActer {
    _count: ActerCountAggregate | null;
    _avg: ActerAvgAggregate | null;
    _sum: ActerSumAggregate | null;
    _min: ActerMinAggregate | null;
    _max: ActerMaxAggregate | null;
}
