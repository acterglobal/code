export declare class NotificationMaxAggregate {
    id: string | null;
    type: "NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER" | null;
    url: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    sendTo: string | null;
    sentAt: Date | null;
    viewedAt: Date | null;
    toActerId: string | null;
    onActerId: string | null;
    postId: string | null;
    activityId: string | null;
}
