import { ActerCreateNestedOneWithoutActivitiesOrganizedInput } from "../inputs/ActerCreateNestedOneWithoutActivitiesOrganizedInput";
import { ActerCreateNestedOneWithoutActivityInput } from "../inputs/ActerCreateNestedOneWithoutActivityInput";
import { UserCreateNestedOneWithoutActivitiesCreatedInput } from "../inputs/UserCreateNestedOneWithoutActivitiesCreatedInput";
export declare class ActivityCreateWithoutActivityTypeInput {
    id?: string | undefined;
    startAt: Date;
    endAt: Date;
    isOnline: boolean;
    isAllDay?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    createdByUser: UserCreateNestedOneWithoutActivitiesCreatedInput;
    Acter?: ActerCreateNestedOneWithoutActivityInput | undefined;
    Organiser?: ActerCreateNestedOneWithoutActivitiesOrganizedInput | undefined;
}