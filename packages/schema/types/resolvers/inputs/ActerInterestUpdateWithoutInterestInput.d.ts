import { ActerUpdateOneRequiredWithoutActerInterestsInput } from "../inputs/ActerUpdateOneRequiredWithoutActerInterestsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActerInterestInput } from "../inputs/UserUpdateOneRequiredWithoutActerInterestInput";
export declare class ActerInterestUpdateWithoutInterestInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    CreatedByUser?: UserUpdateOneRequiredWithoutActerInterestInput | undefined;
    Acter?: ActerUpdateOneRequiredWithoutActerInterestsInput | undefined;
}
