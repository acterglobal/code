import { GraphQLResolveInfo } from "graphql";
import { DeleteManyActerArgs } from "./args/DeleteManyActerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyActerResolver {
    deleteManyActer(ctx: any, info: GraphQLResolveInfo, args: DeleteManyActerArgs): Promise<AffectedRowsOutput>;
}
