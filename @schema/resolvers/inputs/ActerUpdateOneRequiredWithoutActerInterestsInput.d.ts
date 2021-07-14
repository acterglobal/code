import { ActerCreateOrConnectWithoutActerInterestsInput } from "../inputs/ActerCreateOrConnectWithoutActerInterestsInput";
import { ActerCreateWithoutActerInterestsInput } from "../inputs/ActerCreateWithoutActerInterestsInput";
import { ActerUpdateWithoutActerInterestsInput } from "../inputs/ActerUpdateWithoutActerInterestsInput";
import { ActerUpsertWithoutActerInterestsInput } from "../inputs/ActerUpsertWithoutActerInterestsInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneRequiredWithoutActerInterestsInput {
    create?: ActerCreateWithoutActerInterestsInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutActerInterestsInput | undefined;
    upsert?: ActerUpsertWithoutActerInterestsInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    update?: ActerUpdateWithoutActerInterestsInput | undefined;
}
