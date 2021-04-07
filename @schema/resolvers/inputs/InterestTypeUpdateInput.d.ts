import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { InterestTypeUpdateManyWithoutParentInput } from "../inputs/InterestTypeUpdateManyWithoutParentInput";
import { InterestTypeUpdateOneWithoutChildrenInput } from "../inputs/InterestTypeUpdateOneWithoutChildrenInput";
import { InterestUpdateManyWithoutInterestTypeInput } from "../inputs/InterestUpdateManyWithoutInterestTypeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InterestTypeUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    sortOrder?: IntFieldUpdateOperationsInput | undefined;
    parent?: InterestTypeUpdateOneWithoutChildrenInput | undefined;
    children?: InterestTypeUpdateManyWithoutParentInput | undefined;
    Interests?: InterestUpdateManyWithoutInterestTypeInput | undefined;
}
