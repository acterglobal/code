import { ActerInterestUpdateManyWithoutInterestInput } from "../inputs/ActerInterestUpdateManyWithoutInterestInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InterestUpdateWithoutInterestTypeInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    sdgNumber?: NullableStringFieldUpdateOperationsInput | undefined;
    InterestActers?: ActerInterestUpdateManyWithoutInterestInput | undefined;
}
