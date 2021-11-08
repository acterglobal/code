import { GraphQLResolveInfo } from "graphql";
import { FindUniqueActivityTypeArgs } from "./args/FindUniqueActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
export declare class FindUniqueActivityTypeResolver {
    activityType(ctx: any, info: GraphQLResolveInfo, args: FindUniqueActivityTypeArgs): Promise<ActivityType | null>;
}
