import { ActerCreateOrConnectWithoutAttachedPostsInput } from "../inputs/ActerCreateOrConnectWithoutAttachedPostsInput";
import { ActerCreateWithoutAttachedPostsInput } from "../inputs/ActerCreateWithoutAttachedPostsInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutAttachedPostsInput {
    create?: ActerCreateWithoutAttachedPostsInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutAttachedPostsInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
