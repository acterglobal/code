import { GraphQLResolveInfo } from "graphql";
import { CreateManyActerTypeArgs } from "./args/CreateManyActerTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyActerTypeResolver {
    createManyActerType(ctx: any, info: GraphQLResolveInfo, args: CreateManyActerTypeArgs): Promise<AffectedRowsOutput>;
}
