import { Acter } from "../models/Acter";
import { ActerTypeRule } from "../models/ActerTypeRule";
export declare class ActerType {
    id: string;
    name: string;
    Acter?: Acter[];
    ActerTypeRules?: ActerTypeRule[];
    RulesOnActerType?: ActerTypeRule[];
}
