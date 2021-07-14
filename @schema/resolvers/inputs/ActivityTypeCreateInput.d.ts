import { ActivityCreateNestedManyWithoutActivityTypeInput } from "../inputs/ActivityCreateNestedManyWithoutActivityTypeInput";
export declare class ActivityTypeCreateInput {
    id?: string | undefined;
    name: string;
    Activity?: ActivityCreateNestedManyWithoutActivityTypeInput | undefined;
}
