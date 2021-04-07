import { AccountCreateInput } from "../../../inputs/AccountCreateInput";
import { AccountUpdateInput } from "../../../inputs/AccountUpdateInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
export declare class UpsertAccountArgs {
    where: AccountWhereUniqueInput;
    create: AccountCreateInput;
    update: AccountUpdateInput;
}
