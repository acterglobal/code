import { ActerTypeRuleUpdateManyWithoutObjectInput } from "../inputs/ActerTypeRuleUpdateManyWithoutObjectInput";
import { ActerUpdateManyWithoutActerTypeInput } from "../inputs/ActerUpdateManyWithoutActerTypeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActerTypeUpdateWithoutActerTypeRulesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    Acter?: ActerUpdateManyWithoutActerTypeInput | undefined;
    RulesOnActerType?: ActerTypeRuleUpdateManyWithoutObjectInput | undefined;
}
