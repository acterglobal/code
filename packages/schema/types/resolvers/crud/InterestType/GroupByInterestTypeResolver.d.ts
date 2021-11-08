import { GraphQLResolveInfo } from "graphql";
import { GroupByInterestTypeArgs } from "./args/GroupByInterestTypeArgs";
import { InterestTypeGroupBy } from "../../outputs/InterestTypeGroupBy";
export declare class GroupByInterestTypeResolver {
    groupByInterestType(ctx: any, info: GraphQLResolveInfo, args: GroupByInterestTypeArgs): Promise<InterestTypeGroupBy[]>;
}
