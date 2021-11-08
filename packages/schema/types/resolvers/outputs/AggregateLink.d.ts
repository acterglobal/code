import { LinkCountAggregate } from "../outputs/LinkCountAggregate";
import { LinkMaxAggregate } from "../outputs/LinkMaxAggregate";
import { LinkMinAggregate } from "../outputs/LinkMinAggregate";
export declare class AggregateLink {
    _count: LinkCountAggregate | null;
    _min: LinkMinAggregate | null;
    _max: LinkMaxAggregate | null;
}
