import { ActivityCreateManyCreatedByUserInputEnvelope } from "../inputs/ActivityCreateManyCreatedByUserInputEnvelope";
import { ActivityCreateOrConnectWithoutCreatedByUserInput } from "../inputs/ActivityCreateOrConnectWithoutCreatedByUserInput";
import { ActivityCreateWithoutCreatedByUserInput } from "../inputs/ActivityCreateWithoutCreatedByUserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityCreateNestedManyWithoutCreatedByUserInput {
    create?: ActivityCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    createMany?: ActivityCreateManyCreatedByUserInputEnvelope | undefined;
    connect?: ActivityWhereUniqueInput[] | undefined;
}
