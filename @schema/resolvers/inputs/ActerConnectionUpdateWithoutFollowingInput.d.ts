import { ActerUpdateOneRequiredWithoutFollowingInput } from "../inputs/ActerUpdateOneRequiredWithoutFollowingInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumActerConnectionRoleFieldUpdateOperationsInput } from "../inputs/EnumActerConnectionRoleFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActerConnectionsInput } from "../inputs/UserUpdateOneRequiredWithoutActerConnectionsInput";
export declare class ActerConnectionUpdateWithoutFollowingInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    isApproved?: NullableBoolFieldUpdateOperationsInput | undefined;
    role?: EnumActerConnectionRoleFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    CreatedByUser?: UserUpdateOneRequiredWithoutActerConnectionsInput | undefined;
    Follower?: ActerUpdateOneRequiredWithoutFollowingInput | undefined;
}