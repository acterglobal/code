import { ActerConnectionCreateManyCreatedByUserInputEnvelope } from "../inputs/ActerConnectionCreateManyCreatedByUserInputEnvelope";
import { ActerConnectionCreateOrConnectWithoutCreatedByUserInput } from "../inputs/ActerConnectionCreateOrConnectWithoutCreatedByUserInput";
import { ActerConnectionCreateWithoutCreatedByUserInput } from "../inputs/ActerConnectionCreateWithoutCreatedByUserInput";
import { ActerConnectionScalarWhereInput } from "../inputs/ActerConnectionScalarWhereInput";
import { ActerConnectionUpdateManyWithWhereWithoutCreatedByUserInput } from "../inputs/ActerConnectionUpdateManyWithWhereWithoutCreatedByUserInput";
import { ActerConnectionUpdateWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/ActerConnectionUpdateWithWhereUniqueWithoutCreatedByUserInput";
import { ActerConnectionUpsertWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/ActerConnectionUpsertWithWhereUniqueWithoutCreatedByUserInput";
import { ActerConnectionWhereUniqueInput } from "../inputs/ActerConnectionWhereUniqueInput";
export declare class ActerConnectionUpdateManyWithoutCreatedByUserInput {
    create?: ActerConnectionCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: ActerConnectionCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    upsert?: ActerConnectionUpsertWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    createMany?: ActerConnectionCreateManyCreatedByUserInputEnvelope | undefined;
    connect?: ActerConnectionWhereUniqueInput[] | undefined;
    set?: ActerConnectionWhereUniqueInput[] | undefined;
    disconnect?: ActerConnectionWhereUniqueInput[] | undefined;
    delete?: ActerConnectionWhereUniqueInput[] | undefined;
    update?: ActerConnectionUpdateWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    updateMany?: ActerConnectionUpdateManyWithWhereWithoutCreatedByUserInput[] | undefined;
    deleteMany?: ActerConnectionScalarWhereInput[] | undefined;
}
