import { GraphQLResolveInfo } from "graphql";
import { FindManyInterestArgs } from "./args/FindManyInterestArgs";
import { Interest } from "../../../models/Interest";
export declare class FindManyInterestResolver {
    interests(ctx: any, info: GraphQLResolveInfo, args: FindManyInterestArgs): Promise<Interest[]>;
}
