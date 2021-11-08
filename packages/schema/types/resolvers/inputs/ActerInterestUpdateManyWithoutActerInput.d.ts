import { ActerInterestCreateManyActerInputEnvelope } from "../inputs/ActerInterestCreateManyActerInputEnvelope";
import { ActerInterestCreateOrConnectWithoutActerInput } from "../inputs/ActerInterestCreateOrConnectWithoutActerInput";
import { ActerInterestCreateWithoutActerInput } from "../inputs/ActerInterestCreateWithoutActerInput";
import { ActerInterestScalarWhereInput } from "../inputs/ActerInterestScalarWhereInput";
import { ActerInterestUpdateManyWithWhereWithoutActerInput } from "../inputs/ActerInterestUpdateManyWithWhereWithoutActerInput";
import { ActerInterestUpdateWithWhereUniqueWithoutActerInput } from "../inputs/ActerInterestUpdateWithWhereUniqueWithoutActerInput";
import { ActerInterestUpsertWithWhereUniqueWithoutActerInput } from "../inputs/ActerInterestUpsertWithWhereUniqueWithoutActerInput";
import { ActerInterestWhereUniqueInput } from "../inputs/ActerInterestWhereUniqueInput";
export declare class ActerInterestUpdateManyWithoutActerInput {
    create?: ActerInterestCreateWithoutActerInput[] | undefined;
    connectOrCreate?: ActerInterestCreateOrConnectWithoutActerInput[] | undefined;
    upsert?: ActerInterestUpsertWithWhereUniqueWithoutActerInput[] | undefined;
    createMany?: ActerInterestCreateManyActerInputEnvelope | undefined;
    connect?: ActerInterestWhereUniqueInput[] | undefined;
    set?: ActerInterestWhereUniqueInput[] | undefined;
    disconnect?: ActerInterestWhereUniqueInput[] | undefined;
    delete?: ActerInterestWhereUniqueInput[] | undefined;
    update?: ActerInterestUpdateWithWhereUniqueWithoutActerInput[] | undefined;
    updateMany?: ActerInterestUpdateManyWithWhereWithoutActerInput[] | undefined;
    deleteMany?: ActerInterestScalarWhereInput[] | undefined;
}
