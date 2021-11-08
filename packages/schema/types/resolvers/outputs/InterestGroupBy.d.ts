import { InterestCountAggregate } from "../outputs/InterestCountAggregate";
import { InterestMaxAggregate } from "../outputs/InterestMaxAggregate";
import { InterestMinAggregate } from "../outputs/InterestMinAggregate";
export declare class InterestGroupBy {
    id: string;
    name: string;
    description: string | null;
    sdgNumber: string | null;
    interestTypeId: string;
    _count: InterestCountAggregate | null;
    _min: InterestMinAggregate | null;
    _max: InterestMaxAggregate | null;
}
