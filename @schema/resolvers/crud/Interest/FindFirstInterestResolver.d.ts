import { GraphQLResolveInfo } from "graphql";
import { FindFirstInterestArgs } from "./args/FindFirstInterestArgs";
import { Interest } from "../../../models/Interest";
export declare class FindFirstInterestResolver {
    findFirstInterest(ctx: any, info: GraphQLResolveInfo, args: FindFirstInterestArgs): Promise<Interest | null>;
}
