import { ActerInterestCreateManyCreatedByUserInputEnvelope } from "../inputs/ActerInterestCreateManyCreatedByUserInputEnvelope";
import { ActerInterestCreateOrConnectWithoutCreatedByUserInput } from "../inputs/ActerInterestCreateOrConnectWithoutCreatedByUserInput";
import { ActerInterestCreateWithoutCreatedByUserInput } from "../inputs/ActerInterestCreateWithoutCreatedByUserInput";
import { ActerInterestWhereUniqueInput } from "../inputs/ActerInterestWhereUniqueInput";
export declare class ActerInterestCreateNestedManyWithoutCreatedByUserInput {
    create?: ActerInterestCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: ActerInterestCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    createMany?: ActerInterestCreateManyCreatedByUserInputEnvelope | undefined;
    connect?: ActerInterestWhereUniqueInput[] | undefined;
}
