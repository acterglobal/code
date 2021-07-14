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
    count: LinkCountAggregate | null;
    min: LinkMinAggregate | null;
    max: LinkMaxAggregate | null;
}
