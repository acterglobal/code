import { Acter } from "../models/Acter";
import { ActerTypeRule } from "../models/ActerTypeRule";
import { ActerTypeCount } from "../resolvers/outputs/ActerTypeCount";
export declare class ActerType {
    id: string;
    name: string;
    Acter?: Acter[];
    ActerTypeRules?: ActerTypeRule[];
    RulesOnActerType?: ActerTypeRule[];
    _count?: ActerTypeCount | null;
}
