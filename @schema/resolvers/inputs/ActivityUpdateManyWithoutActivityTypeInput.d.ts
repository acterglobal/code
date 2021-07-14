import { ActivityCreateManyActivityTypeInputEnvelope } from "../inputs/ActivityCreateManyActivityTypeInputEnvelope";
import { ActivityCreateOrConnectWithoutActivityTypeInput } from "../inputs/ActivityCreateOrConnectWithoutActivityTypeInput";
import { ActivityCreateWithoutActivityTypeInput } from "../inputs/ActivityCreateWithoutActivityTypeInput";
import { ActivityScalarWhereInput } from "../inputs/ActivityScalarWhereInput";
import { ActivityUpdateManyWithWhereWithoutActivityTypeInput } from "../inputs/ActivityUpdateManyWithWhereWithoutActivityTypeInput";
import { ActivityUpdateWithWhereUniqueWithoutActivityTypeInput } from "../inputs/ActivityUpdateWithWhereUniqueWithoutActivityTypeInput";
import { ActivityUpsertWithWhereUniqueWithoutActivityTypeInput } from "../inputs/ActivityUpsertWithWhereUniqueWithoutActivityTypeInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityUpdateManyWithoutActivityTypeInput {
    create?: ActivityCreateWithoutActivityTypeInput[] | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutActivityTypeInput[] | undefined;
    upsert?: ActivityUpsertWithWhereUniqueWithoutActivityTypeInput[] | undefined;
    createMany?: ActivityCreateManyActivityTypeInputEnvelope | undefined;
    connect?: ActivityWhereUniqueInput[] | undefined;
    set?: ActivityWhereUniqueInput[] | undefined;
    disconnect?: ActivityWhereUniqueInput[] | undefined;
    delete?: ActivityWhereUniqueInput[] | undefined;
    update?: ActivityUpdateWithWhereUniqueWithoutActivityTypeInput[] | undefined;
    updateMany?: ActivityUpdateManyWithWhereWithoutActivityTypeInput[] | undefined;
    deleteMany?: ActivityScalarWhereInput[] | undefined;
}
