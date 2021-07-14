import { ActerCreateManyDeletedByUserInputEnvelope } from "../inputs/ActerCreateManyDeletedByUserInputEnvelope";
import { ActerCreateOrConnectWithoutDeletedByUserInput } from "../inputs/ActerCreateOrConnectWithoutDeletedByUserInput";
import { ActerCreateWithoutDeletedByUserInput } from "../inputs/ActerCreateWithoutDeletedByUserInput";
import { ActerScalarWhereInput } from "../inputs/ActerScalarWhereInput";
import { ActerUpdateManyWithWhereWithoutDeletedByUserInput } from "../inputs/ActerUpdateManyWithWhereWithoutDeletedByUserInput";
import { ActerUpdateWithWhereUniqueWithoutDeletedByUserInput } from "../inputs/ActerUpdateWithWhereUniqueWithoutDeletedByUserInput";
import { ActerUpsertWithWhereUniqueWithoutDeletedByUserInput } from "../inputs/ActerUpsertWithWhereUniqueWithoutDeletedByUserInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateManyWithoutDeletedByUserInput {
    create?: ActerCreateWithoutDeletedByUserInput[] | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutDeletedByUserInput[] | undefined;
    upsert?: ActerUpsertWithWhereUniqueWithoutDeletedByUserInput[] | undefined;
    createMany?: ActerCreateManyDeletedByUserInputEnvelope | undefined;
    connect?: ActerWhereUniqueInput[] | undefined;
    set?: ActerWhereUniqueInput[] | undefined;
    disconnect?: ActerWhereUniqueInput[] | undefined;
    delete?: ActerWhereUniqueInput[] | undefined;
    update?: ActerUpdateWithWhereUniqueWithoutDeletedByUserInput[] | undefined;
    updateMany?: ActerUpdateManyWithWhereWithoutDeletedByUserInput[] | undefined;
    deleteMany?: ActerScalarWhereInput[] | undefined;
}
