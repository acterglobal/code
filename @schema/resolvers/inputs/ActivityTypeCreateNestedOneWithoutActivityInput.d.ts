import { ActivityTypeCreateOrConnectWithoutActivityInput } from "../inputs/ActivityTypeCreateOrConnectWithoutActivityInput";
import { ActivityTypeCreateWithoutActivityInput } from "../inputs/ActivityTypeCreateWithoutActivityInput";
import { ActivityTypeWhereUniqueInput } from "../inputs/ActivityTypeWhereUniqueInput";
export declare class ActivityTypeCreateNestedOneWithoutActivityInput {
    create?: ActivityTypeCreateWithoutActivityInput | undefined;
    connectOrCreate?: ActivityTypeCreateOrConnectWithoutActivityInput | undefined;
    connect?: ActivityTypeWhereUniqueInput | undefined;
}
