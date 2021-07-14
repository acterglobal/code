import { ActerCreateOrConnectWithoutFollowingInput } from "../inputs/ActerCreateOrConnectWithoutFollowingInput";
import { ActerCreateWithoutFollowingInput } from "../inputs/ActerCreateWithoutFollowingInput";
import { ActerUpdateWithoutFollowingInput } from "../inputs/ActerUpdateWithoutFollowingInput";
import { ActerUpsertWithoutFollowingInput } from "../inputs/ActerUpsertWithoutFollowingInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneRequiredWithoutFollowingInput {
    create?: ActerCreateWithoutFollowingInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutFollowingInput | undefined;
    upsert?: ActerUpsertWithoutFollowingInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    update?: ActerUpdateWithoutFollowingInput | undefined;
}
