import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput";
import { PostUpdateWithoutAuthorInput } from "../inputs/PostUpdateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    update: PostUpdateWithoutAuthorInput;
    create: PostCreateWithoutAuthorInput;
}
