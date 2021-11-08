import { InterestTypeUpdateOneRequiredWithoutInterestsInput } from "../inputs/InterestTypeUpdateOneRequiredWithoutInterestsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InterestUpdateWithoutInterestActersInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    sdgNumber?: NullableStringFieldUpdateOperationsInput | undefined;
    InterestType?: InterestTypeUpdateOneRequiredWithoutInterestsInput | undefined;
}
