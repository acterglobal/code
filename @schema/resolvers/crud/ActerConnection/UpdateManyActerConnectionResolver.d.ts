import { GraphQLResolveInfo } from "graphql";
import { UpdateManyActerConnectionArgs } from "./args/UpdateManyActerConnectionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyActerConnectionResolver {
    updateManyActerConnection(ctx: any, info: GraphQLResolveInfo, args: UpdateManyActerConnectionArgs): Promise<AffectedRowsOutput>;
}
