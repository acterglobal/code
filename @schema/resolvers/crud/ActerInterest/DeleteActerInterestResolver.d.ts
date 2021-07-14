import { GraphQLResolveInfo } from "graphql";
import { DeleteActerInterestArgs } from "./args/DeleteActerInterestArgs";
import { ActerInterest } from "../../../models/ActerInterest";
export declare class DeleteActerInterestResolver {
    deleteActerInterest(ctx: any, info: GraphQLResolveInfo, args: DeleteActerInterestArgs): Promise<ActerInterest | null>;
}