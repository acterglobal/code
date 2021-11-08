import { ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput } from "../inputs/ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActerTypeRuleUpdateWithoutObjectInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    canCreate?: BoolFieldUpdateOperationsInput | undefined;
    canJoin?: BoolFieldUpdateOperationsInput | undefined;
    canBecome?: BoolFieldUpdateOperationsInput | undefined;
    Subject?: ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput | undefined;
}
