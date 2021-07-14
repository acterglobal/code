import { ActerAvgAggregate } from "../outputs/ActerAvgAggregate";
import { ActerCountAggregate } from "../outputs/ActerCountAggregate";
import { ActerMaxAggregate } from "../outputs/ActerMaxAggregate";
import { ActerMinAggregate } from "../outputs/ActerMinAggregate";
import { ActerSumAggregate } from "../outputs/ActerSumAggregate";
export declare class AggregateActer {
    count: ActerCountAggregate | null;
    avg: ActerAvgAggregate | null;
    sum: ActerSumAggregate | null;
    min: ActerMinAggregate | null;
    max: ActerMaxAggregate | null;
}
