import { GraphQLResolveInfo } from "graphql";
import { AggregateActerTypeArgs } from "./args/AggregateActerTypeArgs";
import { AggregateActerType } from "../../outputs/AggregateActerType";
export declare class AggregateActerTypeResolver {
    aggregateActerType(ctx: any, info: GraphQLResolveInfo, args: AggregateActerTypeArgs): Promise<AggregateActerType>;
}
