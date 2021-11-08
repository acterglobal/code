import { ActerCreateOrConnectWithoutAttachedPostsInput } from "../inputs/ActerCreateOrConnectWithoutAttachedPostsInput";
import { ActerCreateWithoutAttachedPostsInput } from "../inputs/ActerCreateWithoutAttachedPostsInput";
import { ActerUpdateWithoutAttachedPostsInput } from "../inputs/ActerUpdateWithoutAttachedPostsInput";
import { ActerUpsertWithoutAttachedPostsInput } from "../inputs/ActerUpsertWithoutAttachedPostsInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneRequiredWithoutAttachedPostsInput {
    create?: ActerCreateWithoutAttachedPostsInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutAttachedPostsInput | undefined;
    upsert?: ActerUpsertWithoutAttachedPostsInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    update?: ActerUpdateWithoutAttachedPostsInput | undefined;
}
