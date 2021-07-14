import { GraphQLResolveInfo } from "graphql";
import { AggregatePostArgs } from "./args/AggregatePostArgs";
import { AggregatePost } from "../../outputs/AggregatePost";
export declare class AggregatePostResolver {
    aggregatePost(ctx: any, info: GraphQLResolveInfo, args: AggregatePostArgs): Promise<AggregatePost>;
}
