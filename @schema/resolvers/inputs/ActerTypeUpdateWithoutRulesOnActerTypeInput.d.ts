import { ActerTypeRuleUpdateManyWithoutSubjectInput } from "../inputs/ActerTypeRuleUpdateManyWithoutSubjectInput";
import { ActerUpdateManyWithoutActerTypeInput } from "../inputs/ActerUpdateManyWithoutActerTypeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActerTypeUpdateWithoutRulesOnActerTypeInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    Acter?: ActerUpdateManyWithoutActerTypeInput | undefined;
    ActerTypeRules?: ActerTypeRuleUpdateManyWithoutSubjectInput | undefined;
}
