import { GraphQLResolveInfo } from "graphql";
import { GroupByActivityArgs } from "./args/GroupByActivityArgs";
import { ActivityGroupBy } from "../../outputs/ActivityGroupBy";
export declare class GroupByActivityResolver {
    groupByActivity(ctx: any, info: GraphQLResolveInfo, args: GroupByActivityArgs): Promise<ActivityGroupBy[]>;
}
