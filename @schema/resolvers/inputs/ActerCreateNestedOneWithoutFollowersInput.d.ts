import { ActerCreateOrConnectWithoutFollowersInput } from "../inputs/ActerCreateOrConnectWithoutFollowersInput";
import { ActerCreateWithoutFollowersInput } from "../inputs/ActerCreateWithoutFollowersInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutFollowersInput {
    create?: ActerCreateWithoutFollowersInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutFollowersInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
