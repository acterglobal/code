import { ActerCreateOrConnectWithoutChildrenInput } from "../inputs/ActerCreateOrConnectWithoutChildrenInput";
import { ActerCreateWithoutChildrenInput } from "../inputs/ActerCreateWithoutChildrenInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutChildrenInput {
    create?: ActerCreateWithoutChildrenInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutChildrenInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
