import { ActerCreateNestedOneWithoutAttachedPostsInput } from "../inputs/ActerCreateNestedOneWithoutAttachedPostsInput";
import { PostCreateNestedManyWithoutParentInput } from "../inputs/PostCreateNestedManyWithoutParentInput";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
export declare class PostCreateWithoutAuthorInput {
    id?: string | undefined;
    content: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Parent?: PostCreateNestedOneWithoutCommentsInput | undefined;
    Comments?: PostCreateNestedManyWithoutParentInput | undefined;
    Acter: ActerCreateNestedOneWithoutAttachedPostsInput;
}