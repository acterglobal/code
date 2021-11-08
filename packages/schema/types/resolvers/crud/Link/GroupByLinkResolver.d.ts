import { GraphQLResolveInfo } from "graphql";
import { GroupByLinkArgs } from "./args/GroupByLinkArgs";
import { LinkGroupBy } from "../../outputs/LinkGroupBy";
export declare class GroupByLinkResolver {
    groupByLink(ctx: any, info: GraphQLResolveInfo, args: GroupByLinkArgs): Promise<LinkGroupBy[]>;
}
