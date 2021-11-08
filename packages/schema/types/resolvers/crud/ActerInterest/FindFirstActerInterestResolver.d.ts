import { GraphQLResolveInfo } from "graphql";
import { FindFirstActerInterestArgs } from "./args/FindFirstActerInterestArgs";
import { ActerInterest } from "../../../models/ActerInterest";
export declare class FindFirstActerInterestResolver {
    findFirstActerInterest(ctx: any, info: GraphQLResolveInfo, args: FindFirstActerInterestArgs): Promise<ActerInterest | null>;
}
