import { GraphQLResolveInfo } from "graphql";
import { DeleteManyActerConnectionArgs } from "./args/DeleteManyActerConnectionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyActerConnectionResolver {
    deleteManyActerConnection(ctx: any, info: GraphQLResolveInfo, args: DeleteManyActerConnectionArgs): Promise<AffectedRowsOutput>;
}
