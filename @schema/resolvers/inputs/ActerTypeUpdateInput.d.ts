import { ActerTypeRuleUpdateManyWithoutObjectInput } from "../inputs/ActerTypeRuleUpdateManyWithoutObjectInput";
import { ActerTypeRuleUpdateManyWithoutSubjectInput } from "../inputs/ActerTypeRuleUpdateManyWithoutSubjectInput";
import { ActerUpdateManyWithoutActerTypeInput } from "../inputs/ActerUpdateManyWithoutActerTypeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActerTypeUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    Acter?: ActerUpdateManyWithoutActerTypeInput | undefined;
    ActerTypeRules?: ActerTypeRuleUpdateManyWithoutSubjectInput | undefined;
    RulesOnActerType?: ActerTypeRuleUpdateManyWithoutObjectInput | undefined;
}
