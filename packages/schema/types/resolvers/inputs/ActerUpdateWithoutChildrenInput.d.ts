import { ActerConnectionUpdateManyWithoutFollowerInput } from "../inputs/ActerConnectionUpdateManyWithoutFollowerInput";
import { ActerConnectionUpdateManyWithoutFollowingInput } from "../inputs/ActerConnectionUpdateManyWithoutFollowingInput";
import { ActerInterestUpdateManyWithoutActerInput } from "../inputs/ActerInterestUpdateManyWithoutActerInput";
import { ActerTypeUpdateOneRequiredWithoutActerInput } from "../inputs/ActerTypeUpdateOneRequiredWithoutActerInput";
import { ActerUpdateOneWithoutChildrenInput } from "../inputs/ActerUpdateOneWithoutChildrenInput";
import { ActivityUpdateManyWithoutOrganiserInput } from "../inputs/ActivityUpdateManyWithoutOrganiserInput";
import { ActivityUpdateOneWithoutActerInput } from "../inputs/ActivityUpdateOneWithoutActerInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumActerJoinSettingsFieldUpdateOperationsInput } from "../inputs/EnumActerJoinSettingsFieldUpdateOperationsInput";
import { EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput } from "../inputs/EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput";
import { EnumActerNotificationSettingsFieldUpdateOperationsInput } from "../inputs/EnumActerNotificationSettingsFieldUpdateOperationsInput";
import { EnumActerPrivacySettingsFieldUpdateOperationsInput } from "../inputs/EnumActerPrivacySettingsFieldUpdateOperationsInput";
import { InviteUpdateManyWithoutOnActerInput } from "../inputs/InviteUpdateManyWithoutOnActerInput";
import { LinkUpdateManyWithoutActerInput } from "../inputs/LinkUpdateManyWithoutActerInput";
import { NotificationUpdateManyWithoutOnActerInput } from "../inputs/NotificationUpdateManyWithoutOnActerInput";
import { NotificationUpdateManyWithoutToActerInput } from "../inputs/NotificationUpdateManyWithoutToActerInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutActerInput } from "../inputs/PostUpdateManyWithoutActerInput";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActersCreatedInput } from "../inputs/UserUpdateOneRequiredWithoutActersCreatedInput";
import { UserUpdateOneWithoutActerInput } from "../inputs/UserUpdateOneWithoutActerInput";
import { UserUpdateOneWithoutActersDeletedInput } from "../inputs/UserUpdateOneWithoutActersDeletedInput";
export declare class ActerUpdateWithoutChildrenInput {
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
    useAdmins?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    acterJoinSetting?: EnumActerJoinSettingsFieldUpdateOperationsInput | undefined;
    acterNotifySetting?: EnumActerNotificationSettingsFieldUpdateOperationsInput | undefined;
    acterNotifyEmailFrequency?: EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput | undefined;
    acterPrivacySetting?: EnumActerPrivacySettingsFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    ActerInterests?: ActerInterestUpdateManyWithoutActerInput | undefined;
    createdByUser?: UserUpdateOneRequiredWithoutActersCreatedInput | undefined;
    DeletedByUser?: UserUpdateOneWithoutActersDeletedInput | undefined;
    ActerType?: ActerTypeUpdateOneRequiredWithoutActerInput | undefined;
    Parent?: ActerUpdateOneWithoutChildrenInput | undefined;
    Following?: ActerConnectionUpdateManyWithoutFollowerInput | undefined;
    Followers?: ActerConnectionUpdateManyWithoutFollowingInput | undefined;
    User?: UserUpdateOneWithoutActerInput | undefined;
    Activity?: ActivityUpdateOneWithoutActerInput | undefined;
    ActivitiesOrganized?: ActivityUpdateManyWithoutOrganiserInput | undefined;
    AttachedPosts?: PostUpdateManyWithoutActerInput | undefined;
    AuthoredPosts?: PostUpdateManyWithoutAuthorInput | undefined;
    AttachedLinks?: LinkUpdateManyWithoutActerInput | undefined;
    NotificationsTo?: NotificationUpdateManyWithoutOnActerInput | undefined;
    NotificationsOn?: NotificationUpdateManyWithoutToActerInput | undefined;
    Invite?: InviteUpdateManyWithoutOnActerInput | undefined;
}
