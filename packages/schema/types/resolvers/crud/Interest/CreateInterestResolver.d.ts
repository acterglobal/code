import { GraphQLResolveInfo } from "graphql";
import { CreateInterestArgs } from "./args/CreateInterestArgs";
import { Interest } from "../../../models/Interest";
export declare class CreateInterestResolver {
    createInterest(ctx: any, info: GraphQLResolveInfo, args: CreateInterestArgs): Promise<Interest>;
}
