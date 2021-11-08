import { ActivityCountAggregate } from "../outputs/ActivityCountAggregate";
import { ActivityMaxAggregate } from "../outputs/ActivityMaxAggregate";
import { ActivityMinAggregate } from "../outputs/ActivityMinAggregate";
export declare class AggregateActivity {
    _count: ActivityCountAggregate | null;
    _min: ActivityMinAggregate | null;
    _max: ActivityMaxAggregate | null;
}
