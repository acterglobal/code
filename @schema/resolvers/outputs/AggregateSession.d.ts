import { SessionCountAggregate } from "../outputs/SessionCountAggregate";
import { SessionMaxAggregate } from "../outputs/SessionMaxAggregate";
import { SessionMinAggregate } from "../outputs/SessionMinAggregate";
export declare class AggregateSession {
    count: SessionCountAggregate | null;
    min: SessionMinAggregate | null;
    max: SessionMaxAggregate | null;
}
