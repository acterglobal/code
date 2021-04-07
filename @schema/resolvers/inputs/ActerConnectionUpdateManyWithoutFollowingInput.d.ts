import { ActerConnectionCreateOrConnectWithoutFollowingInput } from "../inputs/ActerConnectionCreateOrConnectWithoutFollowingInput";
import { ActerConnectionCreateWithoutFollowingInput } from "../inputs/ActerConnectionCreateWithoutFollowingInput";
import { ActerConnectionScalarWhereInput } from "../inputs/ActerConnectionScalarWhereInput";
import { ActerConnectionUpdateManyWithWhereWithoutFollowingInput } from "../inputs/ActerConnectionUpdateManyWithWhereWithoutFollowingInput";
import { ActerConnectionUpdateWithWhereUniqueWithoutFollowingInput } from "../inputs/ActerConnectionUpdateWithWhereUniqueWithoutFollowingInput";
import { ActerConnectionUpsertWithWhereUniqueWithoutFollowingInput } from "../inputs/ActerConnectionUpsertWithWhereUniqueWithoutFollowingInput";
import { ActerConnectionWhereUniqueInput } from "../inputs/ActerConnectionWhereUniqueInput";
export declare class ActerConnectionUpdateManyWithoutFollowingInput {
    create?: ActerConnectionCreateWithoutFollowingInput[] | undefined;
    connectOrCreate?: ActerConnectionCreateOrConnectWithoutFollowingInput[] | undefined;
    upsert?: ActerConnectionUpsertWithWhereUniqueWithoutFollowingInput[] | undefined;
    connect?: ActerConnectionWhereUniqueInput[] | undefined;
    set?: ActerConnectionWhereUniqueInput[] | undefined;
    disconnect?: ActerConnectionWhereUniqueInput[] | undefined;
    delete?: ActerConnectionWhereUniqueInput[] | undefined;
    update?: ActerConnectionUpdateWithWhereUniqueWithoutFollowingInput[] | undefined;
    updateMany?: ActerConnectionUpdateManyWithWhereWithoutFollowingInput[] | undefined;
    deleteMany?: ActerConnectionScalarWhereInput[] | undefined;
}
