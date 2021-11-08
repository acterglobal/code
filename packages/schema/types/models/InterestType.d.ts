import { Interest } from "../models/Interest";
import { InterestTypeCount } from "../resolvers/outputs/InterestTypeCount";
export declare class InterestType {
    id: string;
    name: string;
    parent?: InterestType | null;
    children?: InterestType[];
    sortOrder: number;
    parentInterestTypeId?: string | null;
    Interests?: Interest[];
    _count?: InterestTypeCount | null;
}
