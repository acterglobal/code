import { GraphQLResolveInfo } from "graphql";
import { UpsertInterestArgs } from "./args/UpsertInterestArgs";
import { Interest } from "../../../models/Interest";
export declare class UpsertInterestResolver {
    upsertInterest(ctx: any, info: GraphQLResolveInfo, args: UpsertInterestArgs): Promise<Interest>;
}
