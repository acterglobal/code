import { GraphQLResolveInfo } from "graphql";
import { GroupByActivityTypeArgs } from "./args/GroupByActivityTypeArgs";
import { ActivityTypeGroupBy } from "../../outputs/ActivityTypeGroupBy";
export declare class GroupByActivityTypeResolver {
    groupByActivityType(ctx: any, info: GraphQLResolveInfo, args: GroupByActivityTypeArgs): Promise<ActivityTypeGroupBy[]>;
}
