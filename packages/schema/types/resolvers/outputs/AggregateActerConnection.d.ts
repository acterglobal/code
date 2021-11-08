import { ActerConnectionCountAggregate } from "../outputs/ActerConnectionCountAggregate";
import { ActerConnectionMaxAggregate } from "../outputs/ActerConnectionMaxAggregate";
import { ActerConnectionMinAggregate } from "../outputs/ActerConnectionMinAggregate";
export declare class AggregateActerConnection {
    _count: ActerConnectionCountAggregate | null;
    _min: ActerConnectionMinAggregate | null;
    _max: ActerConnectionMaxAggregate | null;
}
