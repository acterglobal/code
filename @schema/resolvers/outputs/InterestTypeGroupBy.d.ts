import { InterestTypeAvgAggregate } from "../outputs/InterestTypeAvgAggregate";
import { InterestTypeCountAggregate } from "../outputs/InterestTypeCountAggregate";
import { InterestTypeMaxAggregate } from "../outputs/InterestTypeMaxAggregate";
import { InterestTypeMinAggregate } from "../outputs/InterestTypeMinAggregate";
import { InterestTypeSumAggregate } from "../outputs/InterestTypeSumAggregate";
export declare class InterestTypeGroupBy {
    id: string;
    name: string;
    sortOrder: number;
    parentInterestTypeId: string | null;
    count: InterestTypeCountAggregate | null;
    avg: InterestTypeAvgAggregate | null;
    sum: InterestTypeSumAggregate | null;
    min: InterestTypeMinAggregate | null;
    max: InterestTypeMaxAggregate | null;
}
