import { ActerConnectionCreateManyFollowerInputEnvelope } from "../inputs/ActerConnectionCreateManyFollowerInputEnvelope";
import { ActerConnectionCreateOrConnectWithoutFollowerInput } from "../inputs/ActerConnectionCreateOrConnectWithoutFollowerInput";
import { ActerConnectionCreateWithoutFollowerInput } from "../inputs/ActerConnectionCreateWithoutFollowerInput";
import { ActerConnectionWhereUniqueInput } from "../inputs/ActerConnectionWhereUniqueInput";
export declare class ActerConnectionCreateNestedManyWithoutFollowerInput {
    create?: ActerConnectionCreateWithoutFollowerInput[] | undefined;
    connectOrCreate?: ActerConnectionCreateOrConnectWithoutFollowerInput[] | undefined;
    createMany?: ActerConnectionCreateManyFollowerInputEnvelope | undefined;
    connect?: ActerConnectionWhereUniqueInput[] | undefined;
}
