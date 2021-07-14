import { GraphQLResolveInfo } from "graphql";
import { DeleteManyActerTypeArgs } from "./args/DeleteManyActerTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyActerTypeResolver {
    deleteManyActerType(ctx: any, info: GraphQLResolveInfo, args: DeleteManyActerTypeArgs): Promise<AffectedRowsOutput>;
}
