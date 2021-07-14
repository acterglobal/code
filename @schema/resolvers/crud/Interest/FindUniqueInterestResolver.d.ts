import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInterestArgs } from "./args/FindUniqueInterestArgs";
import { Interest } from "../../../models/Interest";
export declare class FindUniqueInterestResolver {
    interest(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInterestArgs): Promise<Interest | null>;
}
