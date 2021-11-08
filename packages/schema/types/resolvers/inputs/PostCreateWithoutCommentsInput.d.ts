import { ActerCreateNestedOneWithoutAttachedPostsInput } from "../inputs/ActerCreateNestedOneWithoutAttachedPostsInput";
import { ActerCreateNestedOneWithoutAuthoredPostsInput } from "../inputs/ActerCreateNestedOneWithoutAuthoredPostsInput";
import { NotificationCreateNestedManyWithoutPostInput } from "../inputs/NotificationCreateNestedManyWithoutPostInput";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
export declare class PostCreateWithoutCommentsInput {
    id?: string | undefined;
    content: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Parent?: PostCreateNestedOneWithoutCommentsInput | undefined;
    Acter: ActerCreateNestedOneWithoutAttachedPostsInput;
    Author: ActerCreateNestedOneWithoutAuthoredPostsInput;
    Notification?: NotificationCreateNestedManyWithoutPostInput | undefined;
}
