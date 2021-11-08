export declare class InviteCreateManyInput {
    id?: string | undefined;
    email: string;
    message: string;
    error: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    sentAt: Date;
    acceptedAt: Date;
    onActerId: string;
    createdByUserId: string;
}
