import { LinkCountAggregate } from "../outputs/LinkCountAggregate";
import { LinkMaxAggregate } from "../outputs/LinkMaxAggregate";
import { LinkMinAggregate } from "../outputs/LinkMinAggregate";
export declare class AggregateLink {
    count: LinkCountAggregate | null;
    min: LinkMinAggregate | null;
    max: LinkMaxAggregate | null;
}
