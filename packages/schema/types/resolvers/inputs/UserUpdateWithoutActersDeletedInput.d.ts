import { ActerConnectionUpdateManyWithoutCreatedByUserInput } from "../inputs/ActerConnectionUpdateManyWithoutCreatedByUserInput";
import { ActerInterestUpdateManyWithoutCreatedByUserInput } from "../inputs/ActerInterestUpdateManyWithoutCreatedByUserInput";
import { ActerUpdateManyWithoutCreatedByUserInput } from "../inputs/ActerUpdateManyWithoutCreatedByUserInput";
import { ActerUpdateOneWithoutUserInput } from "../inputs/ActerUpdateOneWithoutUserInput";
import { ActivityUpdateManyWithoutCreatedByUserInput } from "../inputs/ActivityUpdateManyWithoutCreatedByUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InviteUpdateManyWithoutCreatedByUserInput } from "../inputs/InviteUpdateManyWithoutCreatedByUserInput";
import { LinkUpdateManyWithoutCreatedByUserInput } from "../inputs/LinkUpdateManyWithoutCreatedByUserInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutActersDeletedInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    auth0ProviderId?: NullableStringFieldUpdateOperationsInput | undefined;
    intercomId?: NullableStringFieldUpdateOperationsInput | undefined;
    Acter?: ActerUpdateOneWithoutUserInput | undefined;
    ActersCreated?: ActerUpdateManyWithoutCreatedByUserInput | undefined;
    ActerConnections?: ActerConnectionUpdateManyWithoutCreatedByUserInput | undefined;
    LinksCreated?: LinkUpdateManyWithoutCreatedByUserInput | undefined;
    ActerInterest?: ActerInterestUpdateManyWithoutCreatedByUserInput | undefined;
    ActivitiesCreated?: ActivityUpdateManyWithoutCreatedByUserInput | undefined;
    Invite?: InviteUpdateManyWithoutCreatedByUserInput | undefined;
}
