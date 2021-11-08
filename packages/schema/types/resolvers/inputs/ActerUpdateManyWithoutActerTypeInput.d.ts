import { ActerCreateManyActerTypeInputEnvelope } from "../inputs/ActerCreateManyActerTypeInputEnvelope";
import { ActerCreateOrConnectWithoutActerTypeInput } from "../inputs/ActerCreateOrConnectWithoutActerTypeInput";
import { ActerCreateWithoutActerTypeInput } from "../inputs/ActerCreateWithoutActerTypeInput";
import { ActerScalarWhereInput } from "../inputs/ActerScalarWhereInput";
import { ActerUpdateManyWithWhereWithoutActerTypeInput } from "../inputs/ActerUpdateManyWithWhereWithoutActerTypeInput";
import { ActerUpdateWithWhereUniqueWithoutActerTypeInput } from "../inputs/ActerUpdateWithWhereUniqueWithoutActerTypeInput";
import { ActerUpsertWithWhereUniqueWithoutActerTypeInput } from "../inputs/ActerUpsertWithWhereUniqueWithoutActerTypeInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateManyWithoutActerTypeInput {
    create?: ActerCreateWithoutActerTypeInput[] | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutActerTypeInput[] | undefined;
    upsert?: ActerUpsertWithWhereUniqueWithoutActerTypeInput[] | undefined;
    createMany?: ActerCreateManyActerTypeInputEnvelope | undefined;
    connect?: ActerWhereUniqueInput[] | undefined;
    set?: ActerWhereUniqueInput[] | undefined;
    disconnect?: ActerWhereUniqueInput[] | undefined;
    delete?: ActerWhereUniqueInput[] | undefined;
    update?: ActerUpdateWithWhereUniqueWithoutActerTypeInput[] | undefined;
    updateMany?: ActerUpdateManyWithWhereWithoutActerTypeInput[] | undefined;
    deleteMany?: ActerScalarWhereInput[] | undefined;
}
