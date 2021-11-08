import { GraphQLResolveInfo } from "graphql";
import { GroupByActerConnectionArgs } from "./args/GroupByActerConnectionArgs";
import { ActerConnectionGroupBy } from "../../outputs/ActerConnectionGroupBy";
export declare class GroupByActerConnectionResolver {
    groupByActerConnection(ctx: any, info: GraphQLResolveInfo, args: GroupByActerConnectionArgs): Promise<ActerConnectionGroupBy[]>;
}
