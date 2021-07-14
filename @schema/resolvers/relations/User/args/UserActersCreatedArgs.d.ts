import { ActerOrderByWithRelationInput } from "../../../inputs/ActerOrderByWithRelationInput";
import { ActerWhereInput } from "../../../inputs/ActerWhereInput";
import { ActerWhereUniqueInput } from "../../../inputs/ActerWhereUniqueInput";
export declare class UserActersCreatedArgs {
    where?: ActerWhereInput | undefined;
    orderBy?: ActerOrderByWithRelationInput[] | undefined;
    cursor?: ActerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "acterTypeId" | "name" | "slug" | "description" | "location" | "locationLat" | "locationLng" | "url" | "avatarUrl" | "bannerUrl" | "useAdmins" | "createdAt" | "updatedAt" | "acterJoinSetting" | "createdByUserId" | "deletedAt" | "deltedByUserId" | "parentActerId"> | undefined;
}