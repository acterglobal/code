import { ActerOrderByInput } from "../../../inputs/ActerOrderByInput";
import { ActerScalarWhereWithAggregatesInput } from "../../../inputs/ActerScalarWhereWithAggregatesInput";
import { ActerWhereInput } from "../../../inputs/ActerWhereInput";
export declare class GroupByActerArgs {
    where?: ActerWhereInput | undefined;
    orderBy?: ActerOrderByInput[] | undefined;
    by: Array<"id" | "acterTypeId" | "name" | "slug" | "description" | "location" | "locationLat" | "locationLng" | "url" | "avatarUrl" | "bannerUrl" | "useAdmins" | "createdAt" | "updatedAt" | "acterJoinSetting" | "createdByUserId" | "deletedAt" | "deltedByUserId" | "parentActerId">;
    having?: ActerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
