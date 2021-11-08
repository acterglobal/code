import { GraphQLResolveInfo } from "graphql";
import { DeleteInviteArgs } from "./args/DeleteInviteArgs";
import { Invite } from "../../../models/Invite";
export declare class DeleteInviteResolver {
    deleteInvite(ctx: any, info: GraphQLResolveInfo, args: DeleteInviteArgs): Promise<Invite | null>;
}
