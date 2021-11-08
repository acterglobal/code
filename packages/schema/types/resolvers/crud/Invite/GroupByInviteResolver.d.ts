import { GraphQLResolveInfo } from "graphql";
import { GroupByInviteArgs } from "./args/GroupByInviteArgs";
import { InviteGroupBy } from "../../outputs/InviteGroupBy";
export declare class GroupByInviteResolver {
    groupByInvite(ctx: any, info: GraphQLResolveInfo, args: GroupByInviteArgs): Promise<InviteGroupBy[]>;
}
