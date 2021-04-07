import { FindFirstAccountArgs } from "./args/FindFirstAccountArgs";
import { Account } from "../../../models/Account";
export declare class FindFirstAccountResolver {
    findFirstAccount(ctx: any, args: FindFirstAccountArgs): Promise<Account | null>;
}
