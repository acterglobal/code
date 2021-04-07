import { ActerTypeRuleCreateNestedManyWithoutObjectInput } from "../inputs/ActerTypeRuleCreateNestedManyWithoutObjectInput";
import { ActerTypeRuleCreateNestedManyWithoutSubjectInput } from "../inputs/ActerTypeRuleCreateNestedManyWithoutSubjectInput";
export declare class ActerTypeCreateWithoutActerInput {
    id?: string | undefined;
    name: string;
    ActerTypeRules?: ActerTypeRuleCreateNestedManyWithoutSubjectInput | undefined;
    RulesOnActerType?: ActerTypeRuleCreateNestedManyWithoutObjectInput | undefined;
}
