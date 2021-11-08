import { GraphQLResolveInfo } from "graphql";
import { AggregateActivityTypeArgs } from "./args/AggregateActivityTypeArgs";
import { AggregateActivityType } from "../../outputs/AggregateActivityType";
export declare class AggregateActivityTypeResolver {
    aggregateActivityType(ctx: any, info: GraphQLResolveInfo, args: AggregateActivityTypeArgs): Promise<AggregateActivityType>;
}
