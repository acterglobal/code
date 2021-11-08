import { ActerCreateInput } from "../../../inputs/ActerCreateInput";
import { ActerUpdateInput } from "../../../inputs/ActerUpdateInput";
import { ActerWhereUniqueInput } from "../../../inputs/ActerWhereUniqueInput";
export declare class UpsertActerArgs {
    where: ActerWhereUniqueInput;
    create: ActerCreateInput;
    update: ActerUpdateInput;
}
