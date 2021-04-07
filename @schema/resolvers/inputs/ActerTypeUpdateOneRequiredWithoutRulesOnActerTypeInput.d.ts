import { ActerTypeCreateOrConnectWithoutRulesOnActerTypeInput } from "../inputs/ActerTypeCreateOrConnectWithoutRulesOnActerTypeInput";
import { ActerTypeCreateWithoutRulesOnActerTypeInput } from "../inputs/ActerTypeCreateWithoutRulesOnActerTypeInput";
import { ActerTypeUpdateWithoutRulesOnActerTypeInput } from "../inputs/ActerTypeUpdateWithoutRulesOnActerTypeInput";
import { ActerTypeUpsertWithoutRulesOnActerTypeInput } from "../inputs/ActerTypeUpsertWithoutRulesOnActerTypeInput";
import { ActerTypeWhereUniqueInput } from "../inputs/ActerTypeWhereUniqueInput";
export declare class ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput {
    create?: ActerTypeCreateWithoutRulesOnActerTypeInput | undefined;
    connectOrCreate?: ActerTypeCreateOrConnectWithoutRulesOnActerTypeInput | undefined;
    upsert?: ActerTypeUpsertWithoutRulesOnActerTypeInput | undefined;
    connect?: ActerTypeWhereUniqueInput | undefined;
    update?: ActerTypeUpdateWithoutRulesOnActerTypeInput | undefined;
}
