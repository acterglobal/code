import { GraphQLResolveInfo } from "graphql";
import { CreateManyInterestArgs } from "./args/CreateManyInterestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInterestResolver {
    createManyInterest(ctx: any, info: GraphQLResolveInfo, args: CreateManyInterestArgs): Promise<AffectedRowsOutput>;
}
