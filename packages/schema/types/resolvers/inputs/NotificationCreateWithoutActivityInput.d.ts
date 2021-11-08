import { ActerCreateNestedOneWithoutNotificationsOnInput } from "../inputs/ActerCreateNestedOneWithoutNotificationsOnInput";
import { ActerCreateNestedOneWithoutNotificationsToInput } from "../inputs/ActerCreateNestedOneWithoutNotificationsToInput";
import { PostCreateNestedOneWithoutNotificationInput } from "../inputs/PostCreateNestedOneWithoutNotificationInput";
export declare class NotificationCreateWithoutActivityInput {
    id?: string | undefined;
    type: "NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER";
    url: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    sendTo?: string | undefined;
    sentAt?: Date | undefined;
    viewedAt?: Date | undefined;
    ToActer: ActerCreateNestedOneWithoutNotificationsOnInput;
    OnActer: ActerCreateNestedOneWithoutNotificationsToInput;
    Post?: PostCreateNestedOneWithoutNotificationInput | undefined;
}
