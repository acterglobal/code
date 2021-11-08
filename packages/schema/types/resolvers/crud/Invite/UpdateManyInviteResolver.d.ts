import { GraphQLResolveInfo } from "graphql";
import { UpdateManyInviteArgs } from "./args/UpdateManyInviteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInviteResolver {
    updateManyInvite(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInviteArgs): Promise<AffectedRowsOutput>;
}
