import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
export declare class AggregatePost {
    count: PostCountAggregate | null;
    min: PostMinAggregate | null;
    max: PostMaxAggregate | null;
}
