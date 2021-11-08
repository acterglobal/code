import { GraphQLResolveInfo } from "graphql";
import { CreateInviteArgs } from "./args/CreateInviteArgs";
import { Invite } from "../../../models/Invite";
export declare class CreateInviteResolver {
    createInvite(ctx: any, info: GraphQLResolveInfo, args: CreateInviteArgs): Promise<Invite>;
}
