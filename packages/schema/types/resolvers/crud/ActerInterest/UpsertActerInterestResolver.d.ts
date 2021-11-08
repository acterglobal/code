import { GraphQLResolveInfo } from "graphql";
import { UpsertActerInterestArgs } from "./args/UpsertActerInterestArgs";
import { ActerInterest } from "../../../models/ActerInterest";
export declare class UpsertActerInterestResolver {
    upsertActerInterest(ctx: any, info: GraphQLResolveInfo, args: UpsertActerInterestArgs): Promise<ActerInterest>;
}
