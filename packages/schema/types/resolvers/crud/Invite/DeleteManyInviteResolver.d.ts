import { GraphQLResolveInfo } from "graphql";
import { DeleteManyInviteArgs } from "./args/DeleteManyInviteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInviteResolver {
    deleteManyInvite(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInviteArgs): Promise<AffectedRowsOutput>;
}
