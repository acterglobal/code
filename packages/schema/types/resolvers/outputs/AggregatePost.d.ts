import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
export declare class AggregatePost {
    _count: PostCountAggregate | null;
    _min: PostMinAggregate | null;
    _max: PostMaxAggregate | null;
}
