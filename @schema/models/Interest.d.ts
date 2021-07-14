import { ActerInterest } from "../models/ActerInterest";
import { InterestType } from "../models/InterestType";
export declare class Interest {
    id: string;
    name: string;
    description?: string | null;
    sdgNumber?: string | null;
    InterestType?: InterestType;
    interestTypeId: string;
    InterestActers?: ActerInterest[];
}
