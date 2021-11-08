import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPostArgs } from "./args/DeleteManyPostArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPostResolver {
    deleteManyPost(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPostArgs): Promise<AffectedRowsOutput>;
}
