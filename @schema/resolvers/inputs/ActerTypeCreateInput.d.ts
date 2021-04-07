import { ActerCreateNestedManyWithoutActerTypeInput } from "../inputs/ActerCreateNestedManyWithoutActerTypeInput";
import { ActerTypeRuleCreateNestedManyWithoutObjectInput } from "../inputs/ActerTypeRuleCreateNestedManyWithoutObjectInput";
import { ActerTypeRuleCreateNestedManyWithoutSubjectInput } from "../inputs/ActerTypeRuleCreateNestedManyWithoutSubjectInput";
export declare class ActerTypeCreateInput {
    id?: string | undefined;
    name: string;
    Acter?: ActerCreateNestedManyWithoutActerTypeInput | undefined;
    ActerTypeRules?: ActerTypeRuleCreateNestedManyWithoutSubjectInput | undefined;
    RulesOnActerType?: ActerTypeRuleCreateNestedManyWithoutObjectInput | undefined;
}
