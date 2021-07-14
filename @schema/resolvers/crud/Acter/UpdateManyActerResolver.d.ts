import { GraphQLResolveInfo } from "graphql";
import { UpdateManyActerArgs } from "./args/UpdateManyActerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyActerResolver {
    updateManyActer(ctx: any, info: GraphQLResolveInfo, args: UpdateManyActerArgs): Promise<AffectedRowsOutput>;
}
