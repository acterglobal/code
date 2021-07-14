import { ActerTypeCreateOrConnectWithoutActerTypeRulesInput } from "../inputs/ActerTypeCreateOrConnectWithoutActerTypeRulesInput";
import { ActerTypeCreateWithoutActerTypeRulesInput } from "../inputs/ActerTypeCreateWithoutActerTypeRulesInput";
import { ActerTypeWhereUniqueInput } from "../inputs/ActerTypeWhereUniqueInput";
export declare class ActerTypeCreateNestedOneWithoutActerTypeRulesInput {
    create?: ActerTypeCreateWithoutActerTypeRulesInput | undefined;
    connectOrCreate?: ActerTypeCreateOrConnectWithoutActerTypeRulesInput | undefined;
    connect?: ActerTypeWhereUniqueInput | undefined;
}
