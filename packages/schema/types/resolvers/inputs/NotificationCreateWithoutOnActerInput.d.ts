import { ActerCreateNestedOneWithoutNotificationsOnInput } from "../inputs/ActerCreateNestedOneWithoutNotificationsOnInput";
import { ActivityCreateNestedOneWithoutNotificationInput } from "../inputs/ActivityCreateNestedOneWithoutNotificationInput";
import { PostCreateNestedOneWithoutNotificationInput } from "../inputs/PostCreateNestedOneWithoutNotificationInput";
export declare class NotificationCreateWithoutOnActerInput {
    id?: string | undefined;
    type: "NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER";
    url: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    sendTo?: string | undefined;
    sentAt?: Date | undefined;
    viewedAt?: Date | undefined;
    ToActer: ActerCreateNestedOneWithoutNotificationsOnInput;
    Post?: PostCreateNestedOneWithoutNotificationInput | undefined;
    Activity?: ActivityCreateNestedOneWithoutNotificationInput | undefined;
}
