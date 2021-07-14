import { ActerCreateNestedOneWithoutActivitiesOrganizedInput } from "../inputs/ActerCreateNestedOneWithoutActivitiesOrganizedInput";
import { ActerCreateNestedOneWithoutActivityInput } from "../inputs/ActerCreateNestedOneWithoutActivityInput";
import { ActivityTypeCreateNestedOneWithoutActivityInput } from "../inputs/ActivityTypeCreateNestedOneWithoutActivityInput";
export declare class ActivityCreateWithoutCreatedByUserInput {
    id?: string | undefined;
    startAt: Date;
    endAt: Date;
    isOnline: boolean;
    isAllDay?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    ActivityType: ActivityTypeCreateNestedOneWithoutActivityInput;
    Acter?: ActerCreateNestedOneWithoutActivityInput | undefined;
    Organiser?: ActerCreateNestedOneWithoutActivitiesOrganizedInput | undefined;
}