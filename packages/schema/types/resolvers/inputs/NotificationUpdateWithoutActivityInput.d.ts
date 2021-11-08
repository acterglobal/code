import { ActerUpdateOneRequiredWithoutNotificationsOnInput } from "../inputs/ActerUpdateOneRequiredWithoutNotificationsOnInput";
import { ActerUpdateOneRequiredWithoutNotificationsToInput } from "../inputs/ActerUpdateOneRequiredWithoutNotificationsToInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumNotificationTypeFieldUpdateOperationsInput } from "../inputs/EnumNotificationTypeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateOneWithoutNotificationInput } from "../inputs/PostUpdateOneWithoutNotificationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class NotificationUpdateWithoutActivityInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumNotificationTypeFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    sendTo?: NullableStringFieldUpdateOperationsInput | undefined;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    ToActer?: ActerUpdateOneRequiredWithoutNotificationsOnInput | undefined;
    OnActer?: ActerUpdateOneRequiredWithoutNotificationsToInput | undefined;
    Post?: PostUpdateOneWithoutNotificationInput | undefined;
}
