import { ActivityCreateOrConnectWithoutCreatedByUserInput } from "../inputs/ActivityCreateOrConnectWithoutCreatedByUserInput";
import { ActivityCreateWithoutCreatedByUserInput } from "../inputs/ActivityCreateWithoutCreatedByUserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityCreateNestedManyWithoutCreatedByUserInput {
    create?: ActivityCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    connect?: ActivityWhereUniqueInput[] | undefined;
}
