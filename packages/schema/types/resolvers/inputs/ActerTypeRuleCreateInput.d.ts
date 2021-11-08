import { ActerTypeCreateNestedOneWithoutActerTypeRulesInput } from "../inputs/ActerTypeCreateNestedOneWithoutActerTypeRulesInput";
import { ActerTypeCreateNestedOneWithoutRulesOnActerTypeInput } from "../inputs/ActerTypeCreateNestedOneWithoutRulesOnActerTypeInput";
export declare class ActerTypeRuleCreateInput {
    id?: string | undefined;
    canCreate?: boolean | undefined;
    canJoin?: boolean | undefined;
    canBecome?: boolean | undefined;
    Subject: ActerTypeCreateNestedOneWithoutActerTypeRulesInput;
    Object: ActerTypeCreateNestedOneWithoutRulesOnActerTypeInput;
}
