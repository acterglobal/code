import { ActerCreateNestedOneWithoutActivitiesOrganizedInput } from "../inputs/ActerCreateNestedOneWithoutActivitiesOrganizedInput";
import { ActivityTypeCreateNestedOneWithoutActivityInput } from "../inputs/ActivityTypeCreateNestedOneWithoutActivityInput";
import { UserCreateNestedOneWithoutActivitiesCreatedInput } from "../inputs/UserCreateNestedOneWithoutActivitiesCreatedInput";
export declare class ActivityCreateWithoutActerInput {
    id?: string | undefined;
    startAt: Date;
    endAt: Date;
    isOnline: boolean;
    isAllDay?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    ActivityType: ActivityTypeCreateNestedOneWithoutActivityInput;
    createdByUser: UserCreateNestedOneWithoutActivitiesCreatedInput;
    Organiser?: ActerCreateNestedOneWithoutActivitiesOrganizedInput | undefined;
}