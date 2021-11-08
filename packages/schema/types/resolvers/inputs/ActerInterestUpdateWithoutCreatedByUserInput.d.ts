import { ActerUpdateOneRequiredWithoutActerInterestsInput } from "../inputs/ActerUpdateOneRequiredWithoutActerInterestsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InterestUpdateOneRequiredWithoutInterestActersInput } from "../inputs/InterestUpdateOneRequiredWithoutInterestActersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActerInterestUpdateWithoutCreatedByUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Acter?: ActerUpdateOneRequiredWithoutActerInterestsInput | undefined;
    Interest?: InterestUpdateOneRequiredWithoutInterestActersInput | undefined;
}
