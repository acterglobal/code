import { ActerUpdateOneRequiredWithoutFollowersInput } from "../inputs/ActerUpdateOneRequiredWithoutFollowersInput";
import { ActerUpdateOneRequiredWithoutFollowingInput } from "../inputs/ActerUpdateOneRequiredWithoutFollowingInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumActerConnectionRoleFieldUpdateOperationsInput } from "../inputs/EnumActerConnectionRoleFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActerConnectionUpdateWithoutCreatedByUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    isApproved?: NullableBoolFieldUpdateOperationsInput | undefined;
    role?: EnumActerConnectionRoleFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Follower?: ActerUpdateOneRequiredWithoutFollowingInput | undefined;
    Following?: ActerUpdateOneRequiredWithoutFollowersInput | undefined;
}
