import { LinkCountAggregate } from "../outputs/LinkCountAggregate";
import { LinkMaxAggregate } from "../outputs/LinkMaxAggregate";
import { LinkMinAggregate } from "../outputs/LinkMinAggregate";
export declare class LinkGroupBy {
    id: string;
    name: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
    acterId: string;
    createdByUserId: string;
    _count: LinkCountAggregate | null;
    _min: LinkMinAggregate | null;
    _max: LinkMaxAggregate | null;
}
