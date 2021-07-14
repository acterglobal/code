import { ActivityCountAggregate } from "../outputs/ActivityCountAggregate";
import { ActivityMaxAggregate } from "../outputs/ActivityMaxAggregate";
import { ActivityMinAggregate } from "../outputs/ActivityMinAggregate";
export declare class AggregateActivity {
    count: ActivityCountAggregate | null;
    min: ActivityMinAggregate | null;
    max: ActivityMaxAggregate | null;
}
