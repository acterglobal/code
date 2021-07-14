import { ActerCreateManyActerTypeInputEnvelope } from "../inputs/ActerCreateManyActerTypeInputEnvelope";
import { ActerCreateOrConnectWithoutActerTypeInput } from "../inputs/ActerCreateOrConnectWithoutActerTypeInput";
import { ActerCreateWithoutActerTypeInput } from "../inputs/ActerCreateWithoutActerTypeInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedManyWithoutActerTypeInput {
    create?: ActerCreateWithoutActerTypeInput[] | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutActerTypeInput[] | undefined;
    createMany?: ActerCreateManyActerTypeInputEnvelope | undefined;
    connect?: ActerWhereUniqueInput[] | undefined;
}
