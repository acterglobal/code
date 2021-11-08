export declare class NotificationCreateManyToActerInput {
    id?: string | undefined;
    type: "NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER";
    url: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    sendTo?: string | undefined;
    sentAt?: Date | undefined;
    viewedAt?: Date | undefined;
    onActerId: string;
    postId?: string | undefined;
    activityId?: string | undefined;
}
