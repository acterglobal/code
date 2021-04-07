import { ActerCreateOrConnectWithoutDeletedByUserInput } from "../inputs/ActerCreateOrConnectWithoutDeletedByUserInput";
import { ActerCreateWithoutDeletedByUserInput } from "../inputs/ActerCreateWithoutDeletedByUserInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedManyWithoutDeletedByUserInput {
    create?: ActerCreateWithoutDeletedByUserInput[] | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutDeletedByUserInput[] | undefined;
    connect?: ActerWhereUniqueInput[] | undefined;
}
