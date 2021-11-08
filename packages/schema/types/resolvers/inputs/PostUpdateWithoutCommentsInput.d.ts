import { ActerUpdateOneRequiredWithoutAttachedPostsInput } from "../inputs/ActerUpdateOneRequiredWithoutAttachedPostsInput";
import { ActerUpdateOneRequiredWithoutAuthoredPostsInput } from "../inputs/ActerUpdateOneRequiredWithoutAuthoredPostsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NotificationUpdateManyWithoutPostInput } from "../inputs/NotificationUpdateManyWithoutPostInput";
import { PostUpdateOneWithoutCommentsInput } from "../inputs/PostUpdateOneWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PostUpdateWithoutCommentsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    content?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Parent?: PostUpdateOneWithoutCommentsInput | undefined;
    Acter?: ActerUpdateOneRequiredWithoutAttachedPostsInput | undefined;
    Author?: ActerUpdateOneRequiredWithoutAuthoredPostsInput | undefined;
    Notification?: NotificationUpdateManyWithoutPostInput | undefined;
}
