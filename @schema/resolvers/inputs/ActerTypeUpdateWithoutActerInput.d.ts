import { ActerTypeRuleUpdateManyWithoutObjectInput } from "../inputs/ActerTypeRuleUpdateManyWithoutObjectInput";
import { ActerTypeRuleUpdateManyWithoutSubjectInput } from "../inputs/ActerTypeRuleUpdateManyWithoutSubjectInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActerTypeUpdateWithoutActerInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    ActerTypeRules?: ActerTypeRuleUpdateManyWithoutSubjectInput | undefined;
    RulesOnActerType?: ActerTypeRuleUpdateManyWithoutObjectInput | undefined;
}
