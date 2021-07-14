import { ActivityCreateInput } from "../../../inputs/ActivityCreateInput";
import { ActivityUpdateInput } from "../../../inputs/ActivityUpdateInput";
import { ActivityWhereUniqueInput } from "../../../inputs/ActivityWhereUniqueInput";
export declare class UpsertActivityArgs {
    where: ActivityWhereUniqueInput;
    create: ActivityCreateInput;
    update: ActivityUpdateInput;
}
