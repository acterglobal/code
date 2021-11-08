import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { InterestTypeUpdateManyWithoutParentInput } from "../inputs/InterestTypeUpdateManyWithoutParentInput";
import { InterestUpdateManyWithoutInterestTypeInput } from "../inputs/InterestUpdateManyWithoutInterestTypeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InterestTypeUpdateWithoutParentInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    sortOrder?: IntFieldUpdateOperationsInput | undefined;
    children?: InterestTypeUpdateManyWithoutParentInput | undefined;
    Interests?: InterestUpdateManyWithoutInterestTypeInput | undefined;
}
