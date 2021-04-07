import { CreateAccountArgs } from "./args/CreateAccountArgs";
import { Account } from "../../../models/Account";
export declare class CreateAccountResolver {
    createAccount(ctx: any, args: CreateAccountArgs): Promise<Account>;
}
