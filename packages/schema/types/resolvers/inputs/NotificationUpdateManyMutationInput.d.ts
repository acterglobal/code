import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumNotificationTypeFieldUpdateOperationsInput } from "../inputs/EnumNotificationTypeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class NotificationUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumNotificationTypeFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    sendTo?: NullableStringFieldUpdateOperationsInput | undefined;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
