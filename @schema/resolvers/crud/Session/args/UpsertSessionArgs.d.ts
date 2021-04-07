import { SessionCreateInput } from "../../../inputs/SessionCreateInput";
import { SessionUpdateInput } from "../../../inputs/SessionUpdateInput";
import { SessionWhereUniqueInput } from "../../../inputs/SessionWhereUniqueInput";
export declare class UpsertSessionArgs {
    where: SessionWhereUniqueInput;
    create: SessionCreateInput;
    update: SessionUpdateInput;
}
