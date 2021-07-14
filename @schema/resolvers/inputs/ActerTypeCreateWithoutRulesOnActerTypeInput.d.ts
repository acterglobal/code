import { ActerCreateNestedManyWithoutActerTypeInput } from "../inputs/ActerCreateNestedManyWithoutActerTypeInput";
import { ActerTypeRuleCreateNestedManyWithoutSubjectInput } from "../inputs/ActerTypeRuleCreateNestedManyWithoutSubjectInput";
export declare class ActerTypeCreateWithoutRulesOnActerTypeInput {
    id?: string | undefined;
    name: string;
    Acter?: ActerCreateNestedManyWithoutActerTypeInput | undefined;
    ActerTypeRules?: ActerTypeRuleCreateNestedManyWithoutSubjectInput | undefined;
}
