import { ActerConnectionUpdateManyWithoutCreatedByUserInput } from "../inputs/ActerConnectionUpdateManyWithoutCreatedByUserInput";
import { ActerInterestUpdateManyWithoutCreatedByUserInput } from "../inputs/ActerInterestUpdateManyWithoutCreatedByUserInput";
import { ActerUpdateManyWithoutCreatedByUserInput } from "../inputs/ActerUpdateManyWithoutCreatedByUserInput";
import { ActerUpdateManyWithoutDeletedByUserInput } from "../inputs/ActerUpdateManyWithoutDeletedByUserInput";
import { ActerUpdateOneWithoutUserInput } from "../inputs/ActerUpdateOneWithoutUserInput";
import { ActivityUpdateManyWithoutCreatedByUserInput } from "../inputs/ActivityUpdateManyWithoutCreatedByUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Acter?: ActerUpdateOneWithoutUserInput | undefined;
    ActersCreated?: ActerUpdateManyWithoutCreatedByUserInput | undefined;
    ActerConnections?: ActerConnectionUpdateManyWithoutCreatedByUserInput | undefined;
    ActerInterest?: ActerInterestUpdateManyWithoutCreatedByUserInput | undefined;
    ActivitiesCreated?: ActivityUpdateManyWithoutCreatedByUserInput | undefined;
    ActersDeleted?: ActerUpdateManyWithoutDeletedByUserInput | undefined;
}
