import { GraphQLResolveInfo } from "graphql";
import { AggregateActivityArgs } from "./args/AggregateActivityArgs";
import { AggregateActivity } from "../../outputs/AggregateActivity";
export declare class AggregateActivityResolver {
    aggregateActivity(ctx: any, info: GraphQLResolveInfo, args: AggregateActivityArgs): Promise<AggregateActivity>;
}
