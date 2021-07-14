import { ActivityUpdateManyWithoutActivityTypeInput } from "../inputs/ActivityUpdateManyWithoutActivityTypeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActivityTypeUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    Activity?: ActivityUpdateManyWithoutActivityTypeInput | undefined;
}
