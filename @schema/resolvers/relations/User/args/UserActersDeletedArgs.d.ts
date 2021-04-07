import { ActerOrderByInput } from "../../../inputs/ActerOrderByInput";
import { ActerWhereInput } from "../../../inputs/ActerWhereInput";
import { ActerWhereUniqueInput } from "../../../inputs/ActerWhereUniqueInput";
export declare class UserActersDeletedArgs {
    where?: ActerWhereInput | undefined;
    orderBy?: ActerOrderByInput[] | undefined;
    cursor?: ActerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "acterTypeId" | "name" | "slug" | "description" | "location" | "locationLat" | "locationLng" | "url" | "avatarUrl" | "bannerUrl" | "autoApproveFollowers" | "createdAt" | "updatedAt" | "createdByUserId" | "deletedAt" | "deltedByUserId" | "parentActerId"> | undefined;
}
