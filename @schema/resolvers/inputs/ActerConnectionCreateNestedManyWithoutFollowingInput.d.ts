import { ActerConnectionCreateOrConnectWithoutFollowingInput } from "../inputs/ActerConnectionCreateOrConnectWithoutFollowingInput";
import { ActerConnectionCreateWithoutFollowingInput } from "../inputs/ActerConnectionCreateWithoutFollowingInput";
import { ActerConnectionWhereUniqueInput } from "../inputs/ActerConnectionWhereUniqueInput";
export declare class ActerConnectionCreateNestedManyWithoutFollowingInput {
    create?: ActerConnectionCreateWithoutFollowingInput[] | undefined;
    connectOrCreate?: ActerConnectionCreateOrConnectWithoutFollowingInput[] | undefined;
    connect?: ActerConnectionWhereUniqueInput[] | undefined;
}
