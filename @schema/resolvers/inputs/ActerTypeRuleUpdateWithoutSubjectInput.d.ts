import { ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput } from "../inputs/ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActerTypeRuleUpdateWithoutSubjectInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    canCreate?: BoolFieldUpdateOperationsInput | undefined;
    canJoin?: BoolFieldUpdateOperationsInput | undefined;
    canBecome?: BoolFieldUpdateOperationsInput | undefined;
    Object?: ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput | undefined;
}
