import { ActerInterestUpdateManyWithoutInterestInput } from "../inputs/ActerInterestUpdateManyWithoutInterestInput";
import { InterestTypeUpdateOneRequiredWithoutInterestsInput } from "../inputs/InterestTypeUpdateOneRequiredWithoutInterestsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InterestUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    sdgNumber?: NullableStringFieldUpdateOperationsInput | undefined;
    InterestType?: InterestTypeUpdateOneRequiredWithoutInterestsInput | undefined;
    InterestActers?: ActerInterestUpdateManyWithoutInterestInput | undefined;
}
