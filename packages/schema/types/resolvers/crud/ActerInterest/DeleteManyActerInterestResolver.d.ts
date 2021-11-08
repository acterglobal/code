import { GraphQLResolveInfo } from "graphql";
import { DeleteManyActerInterestArgs } from "./args/DeleteManyActerInterestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyActerInterestResolver {
    deleteManyActerInterest(ctx: any, info: GraphQLResolveInfo, args: DeleteManyActerInterestArgs): Promise<AffectedRowsOutput>;
}
