import { GraphQLResolveInfo } from "graphql";
import { UpdateManyActerTypeArgs } from "./args/UpdateManyActerTypeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyActerTypeResolver {
    updateManyActerType(ctx: any, info: GraphQLResolveInfo, args: UpdateManyActerTypeArgs): Promise<AffectedRowsOutput>;
}
