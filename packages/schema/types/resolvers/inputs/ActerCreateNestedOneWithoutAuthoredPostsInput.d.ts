import { ActerCreateOrConnectWithoutAuthoredPostsInput } from "../inputs/ActerCreateOrConnectWithoutAuthoredPostsInput";
import { ActerCreateWithoutAuthoredPostsInput } from "../inputs/ActerCreateWithoutAuthoredPostsInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutAuthoredPostsInput {
    create?: ActerCreateWithoutAuthoredPostsInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutAuthoredPostsInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
