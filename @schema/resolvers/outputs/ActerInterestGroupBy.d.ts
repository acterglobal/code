import { ActerInterestCountAggregate } from "../outputs/ActerInterestCountAggregate";
import { ActerInterestMaxAggregate } from "../outputs/ActerInterestMaxAggregate";
import { ActerInterestMinAggregate } from "../outputs/ActerInterestMinAggregate";
export declare class ActerInterestGroupBy {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    createdByUserId: string;
    acterId: string;
    interestId: string;
    count: ActerInterestCountAggregate | null;
    min: ActerInterestMinAggregate | null;
    max: ActerInterestMaxAggregate | null;
}
