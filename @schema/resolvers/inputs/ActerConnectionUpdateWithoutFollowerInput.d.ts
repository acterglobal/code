import { ActerUpdateOneRequiredWithoutFollowersInput } from "../inputs/ActerUpdateOneRequiredWithoutFollowersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActerConnectionsInput } from "../inputs/UserUpdateOneRequiredWithoutActerConnectionsInput";
export declare class ActerConnectionUpdateWithoutFollowerInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    isApproved?: NullableBoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    CreatedByUser?: UserUpdateOneRequiredWithoutActerConnectionsInput | undefined;
    Following?: ActerUpdateOneRequiredWithoutFollowersInput | undefined;
}
