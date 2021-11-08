import { GraphQLResolveInfo } from "graphql";
import { FindManyActivityTypeArgs } from "./args/FindManyActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
export declare class FindManyActivityTypeResolver {
    activityTypes(ctx: any, info: GraphQLResolveInfo, args: FindManyActivityTypeArgs): Promise<ActivityType[]>;
}
