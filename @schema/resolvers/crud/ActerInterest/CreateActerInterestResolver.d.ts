import { GraphQLResolveInfo } from "graphql";
import { CreateActerInterestArgs } from "./args/CreateActerInterestArgs";
import { ActerInterest } from "../../../models/ActerInterest";
export declare class CreateActerInterestResolver {
    createActerInterest(ctx: any, info: GraphQLResolveInfo, args: CreateActerInterestArgs): Promise<ActerInterest>;
}
