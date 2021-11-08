import { ActerCreateManyParentInputEnvelope } from "../inputs/ActerCreateManyParentInputEnvelope";
import { ActerCreateOrConnectWithoutParentInput } from "../inputs/ActerCreateOrConnectWithoutParentInput";
import { ActerCreateWithoutParentInput } from "../inputs/ActerCreateWithoutParentInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedManyWithoutParentInput {
    create?: ActerCreateWithoutParentInput[] | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutParentInput[] | undefined;
    createMany?: ActerCreateManyParentInputEnvelope | undefined;
    connect?: ActerWhereUniqueInput[] | undefined;
}
