export declare class ActerConnectionCreateManyFollowerInput {
    id?: string | undefined;
    isApproved?: boolean | undefined;
    role?: "PENDING" | "MEMBER" | "ADMIN" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    createdByUserId: string;
    followingActerId: string;
}
