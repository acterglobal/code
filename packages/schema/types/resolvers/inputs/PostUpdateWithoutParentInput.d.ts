import { ActerUpdateOneRequiredWithoutAttachedPostsInput } from "../inputs/ActerUpdateOneRequiredWithoutAttachedPostsInput";
import { ActerUpdateOneRequiredWithoutAuthoredPostsInput } from "../inputs/ActerUpdateOneRequiredWithoutAuthoredPostsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NotificationUpdateManyWithoutPostInput } from "../inputs/NotificationUpdateManyWithoutPostInput";
import { PostUpdateManyWithoutParentInput } from "../inputs/PostUpdateManyWithoutParentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PostUpdateWithoutParentInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    content?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Comments?: PostUpdateManyWithoutParentInput | undefined;
    Acter?: ActerUpdateOneRequiredWithoutAttachedPostsInput | undefined;
    Author?: ActerUpdateOneRequiredWithoutAuthoredPostsInput | undefined;
    Notification?: NotificationUpdateManyWithoutPostInput | undefined;
}
