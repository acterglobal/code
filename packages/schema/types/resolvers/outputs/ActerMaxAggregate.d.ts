export declare class ActerMaxAggregate {
    id: string | null;
    acterTypeId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    location: string | null;
    locationLat: number | null;
    locationLng: number | null;
    url: string | null;
    avatarUrl: string | null;
    bannerUrl: string | null;
    useAdmins: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    acterJoinSetting: "EVERYONE" | "RESTRICTED" | "INVITE_ONLY" | null;
    acterNotifySetting: "ALL_ACTIVITY" | "NONE" | null;
    acterNotifyEmailFrequency: "NEVER" | "DAILY" | "INSTANT" | null;
    acterPrivacySetting: "PUBLIC" | "PRIVATE" | null;
    createdByUserId: string | null;
    deletedAt: Date | null;
    deletedByUserId: string | null;
    parentActerId: string | null;
}
