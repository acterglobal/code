import { ActerUpdateOneWithoutActivitiesOrganizedInput } from "../inputs/ActerUpdateOneWithoutActivitiesOrganizedInput";
import { ActivityTypeUpdateOneRequiredWithoutActivityInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutActivityInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NotificationUpdateManyWithoutActivityInput } from "../inputs/NotificationUpdateManyWithoutActivityInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActivitiesCreatedInput } from "../inputs/UserUpdateOneRequiredWithoutActivitiesCreatedInput";
export declare class ActivityUpdateWithoutActerInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    startAt?: DateTimeFieldUpdateOperationsInput | undefined;
    endAt?: DateTimeFieldUpdateOperationsInput | undefined;
    isOnline?: BoolFieldUpdateOperationsInput | undefined;
    isAllDay?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    ActivityType?: ActivityTypeUpdateOneRequiredWithoutActivityInput | undefined;
    createdByUser?: UserUpdateOneRequiredWithoutActivitiesCreatedInput | undefined;
    Organiser?: ActerUpdateOneWithoutActivitiesOrganizedInput | undefined;
    Notification?: NotificationUpdateManyWithoutActivityInput | undefined;
}
