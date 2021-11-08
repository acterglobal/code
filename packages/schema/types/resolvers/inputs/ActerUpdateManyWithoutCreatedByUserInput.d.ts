import { ActerCreateManyCreatedByUserInputEnvelope } from "../inputs/ActerCreateManyCreatedByUserInputEnvelope";
import { ActerCreateOrConnectWithoutCreatedByUserInput } from "../inputs/ActerCreateOrConnectWithoutCreatedByUserInput";
import { ActerCreateWithoutCreatedByUserInput } from "../inputs/ActerCreateWithoutCreatedByUserInput";
import { ActerScalarWhereInput } from "../inputs/ActerScalarWhereInput";
import { ActerUpdateManyWithWhereWithoutCreatedByUserInput } from "../inputs/ActerUpdateManyWithWhereWithoutCreatedByUserInput";
import { ActerUpdateWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/ActerUpdateWithWhereUniqueWithoutCreatedByUserInput";
import { ActerUpsertWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/ActerUpsertWithWhereUniqueWithoutCreatedByUserInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateManyWithoutCreatedByUserInput {
    create?: ActerCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    upsert?: ActerUpsertWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    createMany?: ActerCreateManyCreatedByUserInputEnvelope | undefined;
    connect?: ActerWhereUniqueInput[] | undefined;
    set?: ActerWhereUniqueInput[] | undefined;
    disconnect?: ActerWhereUniqueInput[] | undefined;
    delete?: ActerWhereUniqueInput[] | undefined;
    update?: ActerUpdateWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    updateMany?: ActerUpdateManyWithWhereWithoutCreatedByUserInput[] | undefined;
    deleteMany?: ActerScalarWhereInput[] | undefined;
}
