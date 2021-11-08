export declare class ActerCreateManyActerTypeInput {
    id?: string | undefined;
    name?: string | undefined;
    slug?: string | undefined;
    description?: string | undefined;
    location?: string | undefined;
    locationLat?: number | undefined;
    locationLng?: number | undefined;
    url?: string | undefined;
    avatarUrl?: string | undefined;
    bannerUrl?: string | undefined;
    useAdmins?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    acterJoinSetting?: "EVERYONE" | "RESTRICTED" | "INVITE_ONLY" | undefined;
    acterNotifySetting?: "ALL_ACTIVITY" | "NONE" | undefined;
    acterNotifyEmailFrequency?: "NEVER" | "DAILY" | "INSTANT" | undefined;
    acterPrivacySetting?: "PUBLIC" | "PRIVATE" | undefined;
    createdByUserId: string;
    deletedAt?: Date | undefined;
    deletedByUserId?: string | undefined;
    parentActerId?: string | undefined;
}
