import { ActerCreateOrConnectWithoutActerInterestsInput } from "../inputs/ActerCreateOrConnectWithoutActerInterestsInput";
import { ActerCreateWithoutActerInterestsInput } from "../inputs/ActerCreateWithoutActerInterestsInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutActerInterestsInput {
    create?: ActerCreateWithoutActerInterestsInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutActerInterestsInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
