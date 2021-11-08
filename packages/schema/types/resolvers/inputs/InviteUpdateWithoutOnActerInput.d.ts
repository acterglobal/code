import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutInviteInput } from "../inputs/UserUpdateOneRequiredWithoutInviteInput";
export declare class InviteUpdateWithoutOnActerInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    message?: StringFieldUpdateOperationsInput | undefined;
    error?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    sentAt?: DateTimeFieldUpdateOperationsInput | undefined;
    acceptedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    createdByUser?: UserUpdateOneRequiredWithoutInviteInput | undefined;
}
