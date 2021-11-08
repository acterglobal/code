import { PostCreateInput } from "../../../inputs/PostCreateInput";
import { PostUpdateInput } from "../../../inputs/PostUpdateInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
export declare class UpsertPostArgs {
    where: PostWhereUniqueInput;
    create: PostCreateInput;
    update: PostUpdateInput;
}
