import { ActerOrderByWithAggregationInput } from "../../../inputs/ActerOrderByWithAggregationInput";
import { ActerScalarWhereWithAggregatesInput } from "../../../inputs/ActerScalarWhereWithAggregatesInput";
import { ActerWhereInput } from "../../../inputs/ActerWhereInput";
export declare class GroupByActerArgs {
    where?: ActerWhereInput | undefined;
    orderBy?: ActerOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "acterTypeId" | "name" | "slug" | "description" | "location" | "locationLat" | "locationLng" | "url" | "avatarUrl" | "bannerUrl" | "useAdmins" | "createdAt" | "updatedAt" | "acterJoinSetting" | "acterNotifySetting" | "acterNotifyEmailFrequency" | "acterPrivacySetting" | "createdByUserId" | "deletedAt" | "deletedByUserId" | "parentActerId">;
    having?: ActerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
