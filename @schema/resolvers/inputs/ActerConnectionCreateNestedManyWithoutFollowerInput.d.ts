import { ActerConnectionCreateOrConnectWithoutFollowerInput } from "../inputs/ActerConnectionCreateOrConnectWithoutFollowerInput";
import { ActerConnectionCreateWithoutFollowerInput } from "../inputs/ActerConnectionCreateWithoutFollowerInput";
import { ActerConnectionWhereUniqueInput } from "../inputs/ActerConnectionWhereUniqueInput";
export declare class ActerConnectionCreateNestedManyWithoutFollowerInput {
    create?: ActerConnectionCreateWithoutFollowerInput[] | undefined;
    connectOrCreate?: ActerConnectionCreateOrConnectWithoutFollowerInput[] | undefined;
    connect?: ActerConnectionWhereUniqueInput[] | undefined;
}
