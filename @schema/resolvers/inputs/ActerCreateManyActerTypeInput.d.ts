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
    createdByUserId: string;
    deletedAt?: Date | undefined;
    deltedByUserId?: string | undefined;
    parentActerId?: string | undefined;
}
