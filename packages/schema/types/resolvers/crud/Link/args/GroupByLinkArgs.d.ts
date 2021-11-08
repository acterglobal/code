import { LinkOrderByWithAggregationInput } from "../../../inputs/LinkOrderByWithAggregationInput";
import { LinkScalarWhereWithAggregatesInput } from "../../../inputs/LinkScalarWhereWithAggregatesInput";
import { LinkWhereInput } from "../../../inputs/LinkWhereInput";
export declare class GroupByLinkArgs {
    where?: LinkWhereInput | undefined;
    orderBy?: LinkOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "url" | "createdAt" | "updatedAt" | "acterId" | "createdByUserId">;
    having?: LinkScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
