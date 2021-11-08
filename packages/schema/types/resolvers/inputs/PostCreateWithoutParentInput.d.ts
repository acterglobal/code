import { ActerCreateNestedOneWithoutAttachedPostsInput } from "../inputs/ActerCreateNestedOneWithoutAttachedPostsInput";
import { ActerCreateNestedOneWithoutAuthoredPostsInput } from "../inputs/ActerCreateNestedOneWithoutAuthoredPostsInput";
import { NotificationCreateNestedManyWithoutPostInput } from "../inputs/NotificationCreateNestedManyWithoutPostInput";
import { PostCreateNestedManyWithoutParentInput } from "../inputs/PostCreateNestedManyWithoutParentInput";
export declare class PostCreateWithoutParentInput {
    id?: string | undefined;
    content: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Comments?: PostCreateNestedManyWithoutParentInput | undefined;
    Acter: ActerCreateNestedOneWithoutAttachedPostsInput;
    Author: ActerCreateNestedOneWithoutAuthoredPostsInput;
    Notification?: NotificationCreateNestedManyWithoutPostInput | undefined;
}
