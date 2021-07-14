import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActerTypeRuleUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    canCreate?: BoolFieldUpdateOperationsInput | undefined;
    canJoin?: BoolFieldUpdateOperationsInput | undefined;
    canBecome?: BoolFieldUpdateOperationsInput | undefined;
}
