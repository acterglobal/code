import { ActerCreateNestedOneWithoutAuthoredPostsInput } from "../inputs/ActerCreateNestedOneWithoutAuthoredPostsInput";
import { NotificationCreateNestedManyWithoutPostInput } from "../inputs/NotificationCreateNestedManyWithoutPostInput";
import { PostCreateNestedManyWithoutParentInput } from "../inputs/PostCreateNestedManyWithoutParentInput";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
export declare class PostCreateWithoutActerInput {
    id?: string | undefined;
    content: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Parent?: PostCreateNestedOneWithoutCommentsInput | undefined;
    Comments?: PostCreateNestedManyWithoutParentInput | undefined;
    Author: ActerCreateNestedOneWithoutAuthoredPostsInput;
    Notification?: NotificationCreateNestedManyWithoutPostInput | undefined;
}
