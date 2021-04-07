import { ActivityCreateOrConnectWithoutCreatedByUserInput } from "../inputs/ActivityCreateOrConnectWithoutCreatedByUserInput";
import { ActivityCreateWithoutCreatedByUserInput } from "../inputs/ActivityCreateWithoutCreatedByUserInput";
import { ActivityScalarWhereInput } from "../inputs/ActivityScalarWhereInput";
import { ActivityUpdateManyWithWhereWithoutCreatedByUserInput } from "../inputs/ActivityUpdateManyWithWhereWithoutCreatedByUserInput";
import { ActivityUpdateWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/ActivityUpdateWithWhereUniqueWithoutCreatedByUserInput";
import { ActivityUpsertWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/ActivityUpsertWithWhereUniqueWithoutCreatedByUserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityUpdateManyWithoutCreatedByUserInput {
    create?: ActivityCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    upsert?: ActivityUpsertWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    connect?: ActivityWhereUniqueInput[] | undefined;
    set?: ActivityWhereUniqueInput[] | undefined;
    disconnect?: ActivityWhereUniqueInput[] | undefined;
    delete?: ActivityWhereUniqueInput[] | undefined;
    update?: ActivityUpdateWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    updateMany?: ActivityUpdateManyWithWhereWithoutCreatedByUserInput[] | undefined;
    deleteMany?: ActivityScalarWhereInput[] | undefined;
}
