import { GraphQLResolveInfo } from "graphql";
import { UpdateActerInterestArgs } from "./args/UpdateActerInterestArgs";
import { ActerInterest } from "../../../models/ActerInterest";
export declare class UpdateActerInterestResolver {
    updateActerInterest(ctx: any, info: GraphQLResolveInfo, args: UpdateActerInterestArgs): Promise<ActerInterest | null>;
}
