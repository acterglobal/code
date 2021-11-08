import { GraphQLResolveInfo } from "graphql";
import { FindManyInviteArgs } from "./args/FindManyInviteArgs";
import { Invite } from "../../../models/Invite";
export declare class FindManyInviteResolver {
    invites(ctx: any, info: GraphQLResolveInfo, args: FindManyInviteArgs): Promise<Invite[]>;
}
