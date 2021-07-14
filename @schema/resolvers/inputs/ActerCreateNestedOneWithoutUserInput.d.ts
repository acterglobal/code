import { ActerCreateOrConnectWithoutUserInput } from "../inputs/ActerCreateOrConnectWithoutUserInput";
import { ActerCreateWithoutUserInput } from "../inputs/ActerCreateWithoutUserInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutUserInput {
    create?: ActerCreateWithoutUserInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutUserInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
