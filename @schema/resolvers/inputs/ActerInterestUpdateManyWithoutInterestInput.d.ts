import { ActerInterestCreateManyInterestInputEnvelope } from "../inputs/ActerInterestCreateManyInterestInputEnvelope";
import { ActerInterestCreateOrConnectWithoutInterestInput } from "../inputs/ActerInterestCreateOrConnectWithoutInterestInput";
import { ActerInterestCreateWithoutInterestInput } from "../inputs/ActerInterestCreateWithoutInterestInput";
import { ActerInterestScalarWhereInput } from "../inputs/ActerInterestScalarWhereInput";
import { ActerInterestUpdateManyWithWhereWithoutInterestInput } from "../inputs/ActerInterestUpdateManyWithWhereWithoutInterestInput";
import { ActerInterestUpdateWithWhereUniqueWithoutInterestInput } from "../inputs/ActerInterestUpdateWithWhereUniqueWithoutInterestInput";
import { ActerInterestUpsertWithWhereUniqueWithoutInterestInput } from "../inputs/ActerInterestUpsertWithWhereUniqueWithoutInterestInput";
import { ActerInterestWhereUniqueInput } from "../inputs/ActerInterestWhereUniqueInput";
export declare class ActerInterestUpdateManyWithoutInterestInput {
    create?: ActerInterestCreateWithoutInterestInput[] | undefined;
    connectOrCreate?: ActerInterestCreateOrConnectWithoutInterestInput[] | undefined;
    upsert?: ActerInterestUpsertWithWhereUniqueWithoutInterestInput[] | undefined;
    createMany?: ActerInterestCreateManyInterestInputEnvelope | undefined;
    connect?: ActerInterestWhereUniqueInput[] | undefined;
    set?: ActerInterestWhereUniqueInput[] | undefined;
    disconnect?: ActerInterestWhereUniqueInput[] | undefined;
    delete?: ActerInterestWhereUniqueInput[] | undefined;
    update?: ActerInterestUpdateWithWhereUniqueWithoutInterestInput[] | undefined;
    updateMany?: ActerInterestUpdateManyWithWhereWithoutInterestInput[] | undefined;
    deleteMany?: ActerInterestScalarWhereInput[] | undefined;
}
