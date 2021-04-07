import { ActerCreateOrConnectWithoutParentInput } from "../inputs/ActerCreateOrConnectWithoutParentInput";
import { ActerCreateWithoutParentInput } from "../inputs/ActerCreateWithoutParentInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedManyWithoutParentInput {
    create?: ActerCreateWithoutParentInput[] | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutParentInput[] | undefined;
    connect?: ActerWhereUniqueInput[] | undefined;
}
