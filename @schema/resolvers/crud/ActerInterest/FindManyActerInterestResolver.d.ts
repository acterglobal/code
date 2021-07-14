import { GraphQLResolveInfo } from "graphql";
import { FindManyActerInterestArgs } from "./args/FindManyActerInterestArgs";
import { ActerInterest } from "../../../models/ActerInterest";
export declare class FindManyActerInterestResolver {
    acterInterests(ctx: any, info: GraphQLResolveInfo, args: FindManyActerInterestArgs): Promise<ActerInterest[]>;
}
