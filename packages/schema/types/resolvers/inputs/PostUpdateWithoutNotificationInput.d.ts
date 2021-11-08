import { ActerUpdateOneRequiredWithoutAttachedPostsInput } from "../inputs/ActerUpdateOneRequiredWithoutAttachedPostsInput";
import { ActerUpdateOneRequiredWithoutAuthoredPostsInput } from "../inputs/ActerUpdateOneRequiredWithoutAuthoredPostsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateManyWithoutParentInput } from "../inputs/PostUpdateManyWithoutParentInput";
import { PostUpdateOneWithoutCommentsInput } from "../inputs/PostUpdateOneWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PostUpdateWithoutNotificationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    content?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Parent?: PostUpdateOneWithoutCommentsInput | undefined;
    Comments?: PostUpdateManyWithoutParentInput | undefined;
    Acter?: ActerUpdateOneRequiredWithoutAttachedPostsInput | undefined;
    Author?: ActerUpdateOneRequiredWithoutAuthoredPostsInput | undefined;
}
