import { GraphQLResolveInfo } from "graphql";
import { FindFirstActivityTypeArgs } from "./args/FindFirstActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
export declare class FindFirstActivityTypeResolver {
    findFirstActivityType(ctx: any, info: GraphQLResolveInfo, args: FindFirstActivityTypeArgs): Promise<ActivityType | null>;
}
