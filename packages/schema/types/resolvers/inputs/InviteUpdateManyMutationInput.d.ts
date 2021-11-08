import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InviteUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    message?: StringFieldUpdateOperationsInput | undefined;
    error?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    sentAt?: DateTimeFieldUpdateOperationsInput | undefined;
    acceptedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
