import { GraphQLResolveInfo } from "graphql";
import { AggregateInterestTypeArgs } from "./args/AggregateInterestTypeArgs";
import { AggregateInterestType } from "../../outputs/AggregateInterestType";
export declare class AggregateInterestTypeResolver {
    aggregateInterestType(ctx: any, info: GraphQLResolveInfo, args: AggregateInterestTypeArgs): Promise<AggregateInterestType>;
}
