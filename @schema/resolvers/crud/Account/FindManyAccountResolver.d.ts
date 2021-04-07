import { FindManyAccountArgs } from "./args/FindManyAccountArgs";
import { Account } from "../../../models/Account";
export declare class FindManyAccountResolver {
    accounts(ctx: any, args: FindManyAccountArgs): Promise<Account[]>;
}
