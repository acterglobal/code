import { ActerConnectionCountAggregate } from "../outputs/ActerConnectionCountAggregate";
import { ActerConnectionMaxAggregate } from "../outputs/ActerConnectionMaxAggregate";
import { ActerConnectionMinAggregate } from "../outputs/ActerConnectionMinAggregate";
export declare class AggregateActerConnection {
    count: ActerConnectionCountAggregate | null;
    min: ActerConnectionMinAggregate | null;
    max: ActerConnectionMaxAggregate | null;
}
