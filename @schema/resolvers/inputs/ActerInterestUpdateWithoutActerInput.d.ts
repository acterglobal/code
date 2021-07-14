import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InterestUpdateOneRequiredWithoutInterestActersInput } from "../inputs/InterestUpdateOneRequiredWithoutInterestActersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActerInterestInput } from "../inputs/UserUpdateOneRequiredWithoutActerInterestInput";
export declare class ActerInterestUpdateWithoutActerInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    CreatedByUser?: UserUpdateOneRequiredWithoutActerInterestInput | undefined;
    Interest?: InterestUpdateOneRequiredWithoutInterestActersInput | undefined;
}
