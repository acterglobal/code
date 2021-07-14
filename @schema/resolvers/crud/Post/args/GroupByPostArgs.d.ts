import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostScalarWhereWithAggregatesInput } from "../../../inputs/PostScalarWhereWithAggregatesInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
export declare class GroupByPostArgs {
    where?: PostWhereInput | undefined;
    orderBy?: PostOrderByInput[] | undefined;
    by: Array<"id" | "content" | "createdAt" | "updatedAt" | "parentId" | "acterId" | "authorId">;
    having?: PostScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
