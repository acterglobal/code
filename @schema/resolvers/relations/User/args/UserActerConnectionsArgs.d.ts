import { ActerConnectionOrderByInput } from "../../../inputs/ActerConnectionOrderByInput";
import { ActerConnectionWhereInput } from "../../../inputs/ActerConnectionWhereInput";
import { ActerConnectionWhereUniqueInput } from "../../../inputs/ActerConnectionWhereUniqueInput";
export declare class UserActerConnectionsArgs {
    where?: ActerConnectionWhereInput | undefined;
    orderBy?: ActerConnectionOrderByInput[] | undefined;
    cursor?: ActerConnectionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "isApproved" | "createdAt" | "updatedAt" | "createdByUserId" | "followerActerId" | "followingActerId"> | undefined;
}
