import { ActerConnectionOrderByWithRelationInput } from "../../../inputs/ActerConnectionOrderByWithRelationInput";
import { ActerConnectionWhereInput } from "../../../inputs/ActerConnectionWhereInput";
import { ActerConnectionWhereUniqueInput } from "../../../inputs/ActerConnectionWhereUniqueInput";
export declare class FindManyActerConnectionArgs {
    where?: ActerConnectionWhereInput | undefined;
    orderBy?: ActerConnectionOrderByWithRelationInput[] | undefined;
    cursor?: ActerConnectionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "isApproved" | "role" | "createdAt" | "updatedAt" | "createdByUserId" | "followerActerId" | "followingActerId"> | undefined;
}
