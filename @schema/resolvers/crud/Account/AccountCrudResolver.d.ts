import { GraphQLResolveInfo } from "graphql";
import { AggregateAccountArgs } from "./args/AggregateAccountArgs";
import { CreateAccountArgs } from "./args/CreateAccountArgs";
import { DeleteAccountArgs } from "./args/DeleteAccountArgs";
import { DeleteManyAccountArgs } from "./args/DeleteManyAccountArgs";
import { FindFirstAccountArgs } from "./args/FindFirstAccountArgs";
import { FindManyAccountArgs } from "./args/FindManyAccountArgs";
import { FindUniqueAccountArgs } from "./args/FindUniqueAccountArgs";
import { UpdateAccountArgs } from "./args/UpdateAccountArgs";
import { UpdateManyAccountArgs } from "./args/UpdateManyAccountArgs";
import { UpsertAccountArgs } from "./args/UpsertAccountArgs";
import { Account } from "../../../models/Account";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAccount } from "../../outputs/AggregateAccount";
export declare class AccountCrudResolver {
    account(ctx: any, args: FindUniqueAccountArgs): Promise<Account | null>;
    findFirstAccount(ctx: any, args: FindFirstAccountArgs): Promise<Account | null>;
    accounts(ctx: any, args: FindManyAccountArgs): Promise<Account[]>;
    createAccount(ctx: any, args: CreateAccountArgs): Promise<Account>;
    deleteAccount(ctx: any, args: DeleteAccountArgs): Promise<Account | null>;
    updateAccount(ctx: any, args: UpdateAccountArgs): Promise<Account | null>;
    deleteManyAccount(ctx: any, args: DeleteManyAccountArgs): Promise<AffectedRowsOutput>;
    updateManyAccount(ctx: any, args: UpdateManyAccountArgs): Promise<AffectedRowsOutput>;
    upsertAccount(ctx: any, args: UpsertAccountArgs): Promise<Account>;
    aggregateAccount(ctx: any, info: GraphQLResolveInfo, args: AggregateAccountArgs): Promise<AggregateAccount>;
}
