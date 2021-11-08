import { GraphQLResolveInfo } from "graphql";
import { UpdateInviteArgs } from "./args/UpdateInviteArgs";
import { Invite } from "../../../models/Invite";
export declare class UpdateInviteResolver {
    updateInvite(ctx: any, info: GraphQLResolveInfo, args: UpdateInviteArgs): Promise<Invite | null>;
}
