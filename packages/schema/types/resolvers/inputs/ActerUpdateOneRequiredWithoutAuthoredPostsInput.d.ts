import { ActerCreateOrConnectWithoutAuthoredPostsInput } from "../inputs/ActerCreateOrConnectWithoutAuthoredPostsInput";
import { ActerCreateWithoutAuthoredPostsInput } from "../inputs/ActerCreateWithoutAuthoredPostsInput";
import { ActerUpdateWithoutAuthoredPostsInput } from "../inputs/ActerUpdateWithoutAuthoredPostsInput";
import { ActerUpsertWithoutAuthoredPostsInput } from "../inputs/ActerUpsertWithoutAuthoredPostsInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneRequiredWithoutAuthoredPostsInput {
    create?: ActerCreateWithoutAuthoredPostsInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutAuthoredPostsInput | undefined;
    upsert?: ActerUpsertWithoutAuthoredPostsInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    update?: ActerUpdateWithoutAuthoredPostsInput | undefined;
}
