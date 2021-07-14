import { ActerCreateNestedManyWithoutActerTypeInput } from "../inputs/ActerCreateNestedManyWithoutActerTypeInput";
import { ActerTypeRuleCreateNestedManyWithoutObjectInput } from "../inputs/ActerTypeRuleCreateNestedManyWithoutObjectInput";
export declare class ActerTypeCreateWithoutActerTypeRulesInput {
    id?: string | undefined;
    name: string;
    Acter?: ActerCreateNestedManyWithoutActerTypeInput | undefined;
    RulesOnActerType?: ActerTypeRuleCreateNestedManyWithoutObjectInput | undefined;
}
