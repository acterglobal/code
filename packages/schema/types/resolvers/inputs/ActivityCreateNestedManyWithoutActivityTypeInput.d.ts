import { ActivityCreateManyActivityTypeInputEnvelope } from "../inputs/ActivityCreateManyActivityTypeInputEnvelope";
import { ActivityCreateOrConnectWithoutActivityTypeInput } from "../inputs/ActivityCreateOrConnectWithoutActivityTypeInput";
import { ActivityCreateWithoutActivityTypeInput } from "../inputs/ActivityCreateWithoutActivityTypeInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityCreateNestedManyWithoutActivityTypeInput {
    create?: ActivityCreateWithoutActivityTypeInput[] | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutActivityTypeInput[] | undefined;
    createMany?: ActivityCreateManyActivityTypeInputEnvelope | undefined;
    connect?: ActivityWhereUniqueInput[] | undefined;
}
