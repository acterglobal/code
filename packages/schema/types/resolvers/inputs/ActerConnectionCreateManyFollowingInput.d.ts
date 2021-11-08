export declare class ActerConnectionCreateManyFollowingInput {
    id?: string | undefined;
    isApproved?: boolean | undefined;
    role?: "PENDING" | "MEMBER" | "ADMIN" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    createdByUserId: string;
    followerActerId: string;
}
