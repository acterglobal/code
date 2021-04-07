import { ActerConnectionUpdateManyWithoutFollowerInput } from "../inputs/ActerConnectionUpdateManyWithoutFollowerInput";
import { ActerConnectionUpdateManyWithoutFollowingInput } from "../inputs/ActerConnectionUpdateManyWithoutFollowingInput";
import { ActerInterestUpdateManyWithoutActerInput } from "../inputs/ActerInterestUpdateManyWithoutActerInput";
import { ActerTypeUpdateOneRequiredWithoutActerInput } from "../inputs/ActerTypeUpdateOneRequiredWithoutActerInput";
import { ActerUpdateManyWithoutParentInput } from "../inputs/ActerUpdateManyWithoutParentInput";
import { ActivityUpdateManyWithoutOrganiserInput } from "../inputs/ActivityUpdateManyWithoutOrganiserInput";
import { ActivityUpdateOneWithoutActerInput } from "../inputs/ActivityUpdateOneWithoutActerInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActersCreatedInput } from "../inputs/UserUpdateOneRequiredWithoutActersCreatedInput";
import { UserUpdateOneWithoutActerInput } from "../inputs/UserUpdateOneWithoutActerInput";
import { UserUpdateOneWithoutActersDeletedInput } from "../inputs/UserUpdateOneWithoutActersDeletedInput";
export declare class ActerUpdateWithoutParentInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    slug?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    location?: NullableStringFieldUpdateOperationsInput | undefined;
    locationLat?: NullableFloatFieldUpdateOperationsInput | undefined;
    locationLng?: NullableFloatFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | undefined;
    bannerUrl?: NullableStringFieldUpdateOperationsInput | undefined;
    autoApproveFollowers?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdByUser?: UserUpdateOneRequiredWithoutActersCreatedInput | undefined;
    DeletedByUser?: UserUpdateOneWithoutActersDeletedInput | undefined;
    ActerType?: ActerTypeUpdateOneRequiredWithoutActerInput | undefined;
    Children?: ActerUpdateManyWithoutParentInput | undefined;
    Following?: ActerConnectionUpdateManyWithoutFollowerInput | undefined;
    Followers?: ActerConnectionUpdateManyWithoutFollowingInput | undefined;
    User?: UserUpdateOneWithoutActerInput | undefined;
    ActerInterests?: ActerInterestUpdateManyWithoutActerInput | undefined;
    Activity?: ActivityUpdateOneWithoutActerInput | undefined;
    ActivitiesOrganized?: ActivityUpdateManyWithoutOrganiserInput | undefined;
}
