import { GraphQLResolveInfo } from "graphql";
import { DeleteManyInterestTypeArgs } from "./args/DeleteManyInterestTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInterestTypeResolver {
    deleteManyInterestType(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInterestTypeArgs): Promise<AffectedRowsOutput>;
}
