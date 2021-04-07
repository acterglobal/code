import { ActerConnectionCreateOrConnectWithoutCreatedByUserInput } from "../inputs/ActerConnectionCreateOrConnectWithoutCreatedByUserInput";
import { ActerConnectionCreateWithoutCreatedByUserInput } from "../inputs/ActerConnectionCreateWithoutCreatedByUserInput";
import { ActerConnectionWhereUniqueInput } from "../inputs/ActerConnectionWhereUniqueInput";
export declare class ActerConnectionCreateNestedManyWithoutCreatedByUserInput {
    create?: ActerConnectionCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: ActerConnectionCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    connect?: ActerConnectionWhereUniqueInput[] | undefined;
}
