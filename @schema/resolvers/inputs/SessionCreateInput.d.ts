export declare class SessionCreateInput {
    id?: string | undefined;
    userId: string;
    expires: Date;
    sessionToken: string;
    accessToken: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
