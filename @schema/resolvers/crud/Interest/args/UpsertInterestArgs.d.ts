import { InterestCreateInput } from "../../../inputs/InterestCreateInput";
import { InterestUpdateInput } from "../../../inputs/InterestUpdateInput";
import { InterestWhereUniqueInput } from "../../../inputs/InterestWhereUniqueInput";
export declare class UpsertInterestArgs {
    where: InterestWhereUniqueInput;
    create: InterestCreateInput;
    update: InterestUpdateInput;
}
