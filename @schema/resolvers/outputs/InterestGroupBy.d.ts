import { InterestCountAggregate } from "../outputs/InterestCountAggregate";
import { InterestMaxAggregate } from "../outputs/InterestMaxAggregate";
import { InterestMinAggregate } from "../outputs/InterestMinAggregate";
export declare class InterestGroupBy {
    id: string;
    name: string;
    description: string | null;
    sdgNumber: string | null;
    interestTypeId: string;
    count: InterestCountAggregate | null;
    min: InterestMinAggregate | null;
    max: InterestMaxAggregate | null;
}
