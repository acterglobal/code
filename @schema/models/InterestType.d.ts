import { Interest } from "../models/Interest";
export declare class InterestType {
    id: string;
    name: string;
    parent?: InterestType | null;
    children?: InterestType[];
    sortOrder: number;
    parentInterestTypeId?: string | null;
    Interests?: Interest[];
}
