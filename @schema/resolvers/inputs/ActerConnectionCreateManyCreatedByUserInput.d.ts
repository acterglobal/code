export declare class ActerConnectionCreateManyCreatedByUserInput {
    id?: string | undefined;
    isApproved?: boolean | undefined;
    role?: "PENDING" | "MEMBER" | "ADMIN" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    followerActerId: string;
    followingActerId: string;
}
