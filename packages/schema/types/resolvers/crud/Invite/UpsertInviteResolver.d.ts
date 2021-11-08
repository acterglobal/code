import { GraphQLResolveInfo } from "graphql";
import { UpsertInviteArgs } from "./args/UpsertInviteArgs";
import { Invite } from "../../../models/Invite";
export declare class UpsertInviteResolver {
    upsertInvite(ctx: any, info: GraphQLResolveInfo, args: UpsertInviteArgs): Promise<Invite>;
}
