import { LinkOrderByWithRelationInput } from "../../../inputs/LinkOrderByWithRelationInput";
import { LinkWhereInput } from "../../../inputs/LinkWhereInput";
import { LinkWhereUniqueInput } from "../../../inputs/LinkWhereUniqueInput";
export declare class ActerAttachedLinksArgs {
    where?: LinkWhereInput | undefined;
    orderBy?: LinkOrderByWithRelationInput[] | undefined;
    cursor?: LinkWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "url" | "createdAt" | "updatedAt" | "acterId" | "createdByUserId"> | undefined;
}
