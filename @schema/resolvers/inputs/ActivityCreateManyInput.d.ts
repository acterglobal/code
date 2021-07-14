export declare class ActivityCreateManyInput {
    id?: string | undefined;
    startAt: Date;
    endAt: Date;
    isOnline: boolean;
    isAllDay?: boolean | undefined;
    activityTypeId: string;
    createdByUserId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    acterId?: string | undefined;
    organiserId?: string | undefined;
}
