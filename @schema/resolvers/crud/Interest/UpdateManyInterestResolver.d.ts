import { GraphQLResolveInfo } from "graphql";
import { UpdateManyInterestArgs } from "./args/UpdateManyInterestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInterestResolver {
    updateManyInterest(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInterestArgs): Promise<AffectedRowsOutput>;
}
