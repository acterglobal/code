import { ActerInterestCreateManyCreatedByUserInputEnvelope } from "../inputs/ActerInterestCreateManyCreatedByUserInputEnvelope";
import { ActerInterestCreateOrConnectWithoutCreatedByUserInput } from "../inputs/ActerInterestCreateOrConnectWithoutCreatedByUserInput";
import { ActerInterestCreateWithoutCreatedByUserInput } from "../inputs/ActerInterestCreateWithoutCreatedByUserInput";
import { ActerInterestScalarWhereInput } from "../inputs/ActerInterestScalarWhereInput";
import { ActerInterestUpdateManyWithWhereWithoutCreatedByUserInput } from "../inputs/ActerInterestUpdateManyWithWhereWithoutCreatedByUserInput";
import { ActerInterestUpdateWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/ActerInterestUpdateWithWhereUniqueWithoutCreatedByUserInput";
import { ActerInterestUpsertWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/ActerInterestUpsertWithWhereUniqueWithoutCreatedByUserInput";
import { ActerInterestWhereUniqueInput } from "../inputs/ActerInterestWhereUniqueInput";
export declare class ActerInterestUpdateManyWithoutCreatedByUserInput {
    create?: ActerInterestCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: ActerInterestCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    upsert?: ActerInterestUpsertWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    createMany?: ActerInterestCreateManyCreatedByUserInputEnvelope | undefined;
    connect?: ActerInterestWhereUniqueInput[] | undefined;
    set?: ActerInterestWhereUniqueInput[] | undefined;
    disconnect?: ActerInterestWhereUniqueInput[] | undefined;
    delete?: ActerInterestWhereUniqueInput[] | undefined;
    update?: ActerInterestUpdateWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    updateMany?: ActerInterestUpdateManyWithWhereWithoutCreatedByUserInput[] | undefined;
    deleteMany?: ActerInterestScalarWhereInput[] | undefined;
}
