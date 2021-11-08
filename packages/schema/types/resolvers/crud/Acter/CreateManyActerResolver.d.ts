import { GraphQLResolveInfo } from "graphql";
import { CreateManyActerArgs } from "./args/CreateManyActerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyActerResolver {
    createManyActer(ctx: any, info: GraphQLResolveInfo, args: CreateManyActerArgs): Promise<AffectedRowsOutput>;
}
