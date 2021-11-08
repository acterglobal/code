import { ActerConnectionCreateManyCreatedByUserInputEnvelope } from "../inputs/ActerConnectionCreateManyCreatedByUserInputEnvelope";
import { ActerConnectionCreateOrConnectWithoutCreatedByUserInput } from "../inputs/ActerConnectionCreateOrConnectWithoutCreatedByUserInput";
import { ActerConnectionCreateWithoutCreatedByUserInput } from "../inputs/ActerConnectionCreateWithoutCreatedByUserInput";
import { ActerConnectionWhereUniqueInput } from "../inputs/ActerConnectionWhereUniqueInput";
export declare class ActerConnectionCreateNestedManyWithoutCreatedByUserInput {
    create?: ActerConnectionCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: ActerConnectionCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    createMany?: ActerConnectionCreateManyCreatedByUserInputEnvelope | undefined;
    connect?: ActerConnectionWhereUniqueInput[] | undefined;
}
