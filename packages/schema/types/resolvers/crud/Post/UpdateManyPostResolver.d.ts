import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPostArgs } from "./args/UpdateManyPostArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPostResolver {
    updateManyPost(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPostArgs): Promise<AffectedRowsOutput>;
}
