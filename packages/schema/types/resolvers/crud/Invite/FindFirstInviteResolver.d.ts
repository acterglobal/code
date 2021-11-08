import { GraphQLResolveInfo } from "graphql";
import { FindFirstInviteArgs } from "./args/FindFirstInviteArgs";
import { Invite } from "../../../models/Invite";
export declare class FindFirstInviteResolver {
    findFirstInvite(ctx: any, info: GraphQLResolveInfo, args: FindFirstInviteArgs): Promise<Invite | null>;
}
