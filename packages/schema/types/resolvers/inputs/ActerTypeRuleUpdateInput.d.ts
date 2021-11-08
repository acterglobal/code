import { ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput } from "../inputs/ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput";
import { ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput } from "../inputs/ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActerTypeRuleUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    canCreate?: BoolFieldUpdateOperationsInput | undefined;
    canJoin?: BoolFieldUpdateOperationsInput | undefined;
    canBecome?: BoolFieldUpdateOperationsInput | undefined;
    Subject?: ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput | undefined;
    Object?: ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput | undefined;
}
