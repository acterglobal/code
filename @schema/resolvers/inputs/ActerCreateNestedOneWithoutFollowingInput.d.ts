import { ActerCreateOrConnectWithoutFollowingInput } from "../inputs/ActerCreateOrConnectWithoutFollowingInput";
import { ActerCreateWithoutFollowingInput } from "../inputs/ActerCreateWithoutFollowingInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutFollowingInput {
    create?: ActerCreateWithoutFollowingInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutFollowingInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
