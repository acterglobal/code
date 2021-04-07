import { ActerCreateOrConnectWithoutCreatedByUserInput } from "../inputs/ActerCreateOrConnectWithoutCreatedByUserInput";
import { ActerCreateWithoutCreatedByUserInput } from "../inputs/ActerCreateWithoutCreatedByUserInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedManyWithoutCreatedByUserInput {
    create?: ActerCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    connect?: ActerWhereUniqueInput[] | undefined;
}
