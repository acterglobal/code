import { GraphQLResolveInfo } from "graphql";
import { DeleteManyInterestArgs } from "./args/DeleteManyInterestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInterestResolver {
    deleteManyInterest(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInterestArgs): Promise<AffectedRowsOutput>;
}
