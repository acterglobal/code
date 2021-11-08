import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumActerJoinSettingsFilter } from "../inputs/EnumActerJoinSettingsFilter";
import { EnumActerNotificationEmailFrequencyFilter } from "../inputs/EnumActerNotificationEmailFrequencyFilter";
import { EnumActerNotificationSettingsFilter } from "../inputs/EnumActerNotificationSettingsFilter";
import { EnumActerPrivacySettingsFilter } from "../inputs/EnumActerPrivacySettingsFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ActerScalarWhereInput {
    AND?: ActerScalarWhereInput[] | undefined;
    OR?: ActerScalarWhereInput[] | undefined;
    NOT?: ActerScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    acterTypeId?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    slug?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    location?: StringNullableFilter | undefined;
    locationLat?: FloatNullableFilter | undefined;
    locationLng?: FloatNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    avatarUrl?: StringNullableFilter | undefined;
    bannerUrl?: StringNullableFilter | undefined;
    useAdmins?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    acterJoinSetting?: EnumActerJoinSettingsFilter | undefined;
    acterNotifySetting?: EnumActerNotificationSettingsFilter | undefined;
    acterNotifyEmailFrequency?: EnumActerNotificationEmailFrequencyFilter | undefined;
    acterPrivacySetting?: EnumActerPrivacySettingsFilter | undefined;
    createdByUserId?: StringFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    deletedByUserId?: StringNullableFilter | undefined;
    parentActerId?: StringNullableFilter | undefined;
}
