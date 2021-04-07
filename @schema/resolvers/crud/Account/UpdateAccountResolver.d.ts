import { UpdateAccountArgs } from "./args/UpdateAccountArgs";
import { Account } from "../../../models/Account";
export declare class UpdateAccountResolver {
    updateAccount(ctx: any, args: UpdateAccountArgs): Promise<Account | null>;
}
