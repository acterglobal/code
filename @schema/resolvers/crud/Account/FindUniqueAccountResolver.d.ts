import { FindUniqueAccountArgs } from "./args/FindUniqueAccountArgs";
import { Account } from "../../../models/Account";
export declare class FindUniqueAccountResolver {
    account(ctx: any, args: FindUniqueAccountArgs): Promise<Account | null>;
}
