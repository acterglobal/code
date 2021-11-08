import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { InterestTypeUpdateOneWithoutChildrenInput } from "../inputs/InterestTypeUpdateOneWithoutChildrenInput";
import { InterestUpdateManyWithoutInterestTypeInput } from "../inputs/InterestUpdateManyWithoutInterestTypeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InterestTypeUpdateWithoutChildrenInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    sortOrder?: IntFieldUpdateOperationsInput | undefined;
    parent?: InterestTypeUpdateOneWithoutChildrenInput | undefined;
    Interests?: InterestUpdateManyWithoutInterestTypeInput | undefined;
}
