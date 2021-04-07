import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AccountUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    compoundId?: StringFieldUpdateOperationsInput | undefined;
    userId?: StringFieldUpdateOperationsInput | undefined;
    providerType?: StringFieldUpdateOperationsInput | undefined;
    providerId?: StringFieldUpdateOperationsInput | undefined;
    providerAccountId?: StringFieldUpdateOperationsInput | undefined;
    refreshToken?: NullableStringFieldUpdateOperationsInput | undefined;
    accessToken?: NullableStringFieldUpdateOperationsInput | undefined;
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
