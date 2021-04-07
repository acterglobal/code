import { GraphQLResolveInfo } from "graphql";
import { AggregateAccountArgs } from "./args/AggregateAccountArgs";
import { AggregateAccount } from "../../outputs/AggregateAccount";
export declare class AggregateAccountResolver {
    aggregateAccount(ctx: any, info: GraphQLResolveInfo, args: AggregateAccountArgs): Promise<AggregateAccount>;
}
