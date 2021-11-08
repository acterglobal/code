import { GraphQLResolveInfo } from "graphql";
import { UpdateInterestArgs } from "./args/UpdateInterestArgs";
import { Interest } from "../../../models/Interest";
export declare class UpdateInterestResolver {
    updateInterest(ctx: any, info: GraphQLResolveInfo, args: UpdateInterestArgs): Promise<Interest | null>;
}
