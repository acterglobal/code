import { ActerCreateOrConnectWithoutFollowersInput } from "../inputs/ActerCreateOrConnectWithoutFollowersInput";
import { ActerCreateWithoutFollowersInput } from "../inputs/ActerCreateWithoutFollowersInput";
import { ActerUpdateWithoutFollowersInput } from "../inputs/ActerUpdateWithoutFollowersInput";
import { ActerUpsertWithoutFollowersInput } from "../inputs/ActerUpsertWithoutFollowersInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneRequiredWithoutFollowersInput {
    create?: ActerCreateWithoutFollowersInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutFollowersInput | undefined;
    upsert?: ActerUpsertWithoutFollowersInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    update?: ActerUpdateWithoutFollowersInput | undefined;
}
