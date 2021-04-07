import { ActerCreateOrConnectWithoutParentInput } from "../inputs/ActerCreateOrConnectWithoutParentInput";
import { ActerCreateWithoutParentInput } from "../inputs/ActerCreateWithoutParentInput";
import { ActerScalarWhereInput } from "../inputs/ActerScalarWhereInput";
import { ActerUpdateManyWithWhereWithoutParentInput } from "../inputs/ActerUpdateManyWithWhereWithoutParentInput";
import { ActerUpdateWithWhereUniqueWithoutParentInput } from "../inputs/ActerUpdateWithWhereUniqueWithoutParentInput";
import { ActerUpsertWithWhereUniqueWithoutParentInput } from "../inputs/ActerUpsertWithWhereUniqueWithoutParentInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateManyWithoutParentInput {
    create?: ActerCreateWithoutParentInput[] | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutParentInput[] | undefined;
    upsert?: ActerUpsertWithWhereUniqueWithoutParentInput[] | undefined;
    connect?: ActerWhereUniqueInput[] | undefined;
    set?: ActerWhereUniqueInput[] | undefined;
    disconnect?: ActerWhereUniqueInput[] | undefined;
    delete?: ActerWhereUniqueInput[] | undefined;
    update?: ActerUpdateWithWhereUniqueWithoutParentInput[] | undefined;
    updateMany?: ActerUpdateManyWithWhereWithoutParentInput[] | undefined;
    deleteMany?: ActerScalarWhereInput[] | undefined;
}
