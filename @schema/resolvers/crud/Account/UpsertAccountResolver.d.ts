import { UpsertAccountArgs } from "./args/UpsertAccountArgs";
import { Account } from "../../../models/Account";
export declare class UpsertAccountResolver {
    upsertAccount(ctx: any, args: UpsertAccountArgs): Promise<Account>;
}
