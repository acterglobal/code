import { GraphQLResolveInfo } from "graphql";
import { FindUniqueActerInterestArgs } from "./args/FindUniqueActerInterestArgs";
import { ActerInterest } from "../../../models/ActerInterest";
export declare class FindUniqueActerInterestResolver {
    acterInterest(ctx: any, info: GraphQLResolveInfo, args: FindUniqueActerInterestArgs): Promise<ActerInterest | null>;
}
