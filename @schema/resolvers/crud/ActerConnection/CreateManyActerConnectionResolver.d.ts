import { GraphQLResolveInfo } from "graphql";
import { CreateManyActerConnectionArgs } from "./args/CreateManyActerConnectionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyActerConnectionResolver {
    createManyActerConnection(ctx: any, info: GraphQLResolveInfo, args: CreateManyActerConnectionArgs): Promise<AffectedRowsOutput>;
}
