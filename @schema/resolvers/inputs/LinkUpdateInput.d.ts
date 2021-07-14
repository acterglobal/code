import { ActerUpdateOneRequiredWithoutAttachedLinksInput } from "../inputs/ActerUpdateOneRequiredWithoutAttachedLinksInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLinksCreatedInput } from "../inputs/UserUpdateOneRequiredWithoutLinksCreatedInput";
export declare class LinkUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Acter?: ActerUpdateOneRequiredWithoutAttachedLinksInput | undefined;
    createdByUser?: UserUpdateOneRequiredWithoutLinksCreatedInput | undefined;
}
