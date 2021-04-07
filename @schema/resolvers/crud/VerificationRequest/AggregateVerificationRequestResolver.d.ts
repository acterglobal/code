import { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationRequestArgs } from "./args/AggregateVerificationRequestArgs";
import { AggregateVerificationRequest } from "../../outputs/AggregateVerificationRequest";
export declare class AggregateVerificationRequestResolver {
    aggregateVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: AggregateVerificationRequestArgs): Promise<AggregateVerificationRequest>;
}
