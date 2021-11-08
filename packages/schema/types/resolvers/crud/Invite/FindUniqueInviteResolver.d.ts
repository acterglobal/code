import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInviteArgs } from "./args/FindUniqueInviteArgs";
import { Invite } from "../../../models/Invite";
export declare class FindUniqueInviteResolver {
    invite(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInviteArgs): Promise<Invite | null>;
}
