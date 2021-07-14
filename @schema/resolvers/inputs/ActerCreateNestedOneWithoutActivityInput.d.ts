import { ActerCreateOrConnectWithoutActivityInput } from "../inputs/ActerCreateOrConnectWithoutActivityInput";
import { ActerCreateWithoutActivityInput } from "../inputs/ActerCreateWithoutActivityInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutActivityInput {
    create?: ActerCreateWithoutActivityInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutActivityInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
