import { ActerUpdateOneRequiredWithoutActerInterestsInput } from "../inputs/ActerUpdateOneRequiredWithoutActerInterestsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InterestUpdateOneRequiredWithoutInterestActersInput } from "../inputs/InterestUpdateOneRequiredWithoutInterestActersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActerInterestInput } from "../inputs/UserUpdateOneRequiredWithoutActerInterestInput";
export declare class ActerInterestUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    CreatedByUser?: UserUpdateOneRequiredWithoutActerInterestInput | undefined;
    Acter?: ActerUpdateOneRequiredWithoutActerInterestsInput | undefined;
    Interest?: InterestUpdateOneRequiredWithoutInterestActersInput | undefined;
}
