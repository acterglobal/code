import { DeleteAccountArgs } from "./args/DeleteAccountArgs";
import { Account } from "../../../models/Account";
export declare class DeleteAccountResolver {
    deleteAccount(ctx: any, args: DeleteAccountArgs): Promise<Account | null>;
}
