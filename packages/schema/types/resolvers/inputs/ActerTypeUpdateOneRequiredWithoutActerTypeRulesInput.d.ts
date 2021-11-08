import { ActerTypeCreateOrConnectWithoutActerTypeRulesInput } from "../inputs/ActerTypeCreateOrConnectWithoutActerTypeRulesInput";
import { ActerTypeCreateWithoutActerTypeRulesInput } from "../inputs/ActerTypeCreateWithoutActerTypeRulesInput";
import { ActerTypeUpdateWithoutActerTypeRulesInput } from "../inputs/ActerTypeUpdateWithoutActerTypeRulesInput";
import { ActerTypeUpsertWithoutActerTypeRulesInput } from "../inputs/ActerTypeUpsertWithoutActerTypeRulesInput";
import { ActerTypeWhereUniqueInput } from "../inputs/ActerTypeWhereUniqueInput";
export declare class ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput {
    create?: ActerTypeCreateWithoutActerTypeRulesInput | undefined;
    connectOrCreate?: ActerTypeCreateOrConnectWithoutActerTypeRulesInput | undefined;
    upsert?: ActerTypeUpsertWithoutActerTypeRulesInput | undefined;
    connect?: ActerTypeWhereUniqueInput | undefined;
    update?: ActerTypeUpdateWithoutActerTypeRulesInput | undefined;
}
