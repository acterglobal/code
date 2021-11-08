import { ActerTypeCreateOrConnectWithoutRulesOnActerTypeInput } from "../inputs/ActerTypeCreateOrConnectWithoutRulesOnActerTypeInput";
import { ActerTypeCreateWithoutRulesOnActerTypeInput } from "../inputs/ActerTypeCreateWithoutRulesOnActerTypeInput";
import { ActerTypeWhereUniqueInput } from "../inputs/ActerTypeWhereUniqueInput";
export declare class ActerTypeCreateNestedOneWithoutRulesOnActerTypeInput {
    create?: ActerTypeCreateWithoutRulesOnActerTypeInput | undefined;
    connectOrCreate?: ActerTypeCreateOrConnectWithoutRulesOnActerTypeInput | undefined;
    connect?: ActerTypeWhereUniqueInput | undefined;
}
