import { ActerInterestCreateManyInterestInputEnvelope } from "../inputs/ActerInterestCreateManyInterestInputEnvelope";
import { ActerInterestCreateOrConnectWithoutInterestInput } from "../inputs/ActerInterestCreateOrConnectWithoutInterestInput";
import { ActerInterestCreateWithoutInterestInput } from "../inputs/ActerInterestCreateWithoutInterestInput";
import { ActerInterestWhereUniqueInput } from "../inputs/ActerInterestWhereUniqueInput";
export declare class ActerInterestCreateNestedManyWithoutInterestInput {
    create?: ActerInterestCreateWithoutInterestInput[] | undefined;
    connectOrCreate?: ActerInterestCreateOrConnectWithoutInterestInput[] | undefined;
    createMany?: ActerInterestCreateManyInterestInputEnvelope | undefined;
    connect?: ActerInterestWhereUniqueInput[] | undefined;
}
