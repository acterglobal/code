import { ActerConnectionCreateOrConnectWithoutFollowerInput } from "../inputs/ActerConnectionCreateOrConnectWithoutFollowerInput";
import { ActerConnectionCreateWithoutFollowerInput } from "../inputs/ActerConnectionCreateWithoutFollowerInput";
import { ActerConnectionScalarWhereInput } from "../inputs/ActerConnectionScalarWhereInput";
import { ActerConnectionUpdateManyWithWhereWithoutFollowerInput } from "../inputs/ActerConnectionUpdateManyWithWhereWithoutFollowerInput";
import { ActerConnectionUpdateWithWhereUniqueWithoutFollowerInput } from "../inputs/ActerConnectionUpdateWithWhereUniqueWithoutFollowerInput";
import { ActerConnectionUpsertWithWhereUniqueWithoutFollowerInput } from "../inputs/ActerConnectionUpsertWithWhereUniqueWithoutFollowerInput";
import { ActerConnectionWhereUniqueInput } from "../inputs/ActerConnectionWhereUniqueInput";
export declare class ActerConnectionUpdateManyWithoutFollowerInput {
    create?: ActerConnectionCreateWithoutFollowerInput[] | undefined;
    connectOrCreate?: ActerConnectionCreateOrConnectWithoutFollowerInput[] | undefined;
    upsert?: ActerConnectionUpsertWithWhereUniqueWithoutFollowerInput[] | undefined;
    connect?: ActerConnectionWhereUniqueInput[] | undefined;
    set?: ActerConnectionWhereUniqueInput[] | undefined;
    disconnect?: ActerConnectionWhereUniqueInput[] | undefined;
    delete?: ActerConnectionWhereUniqueInput[] | undefined;
    update?: ActerConnectionUpdateWithWhereUniqueWithoutFollowerInput[] | undefined;
    updateMany?: ActerConnectionUpdateManyWithWhereWithoutFollowerInput[] | undefined;
    deleteMany?: ActerConnectionScalarWhereInput[] | undefined;
}
