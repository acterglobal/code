import { GraphQLResolveInfo } from "graphql";
import { UpdateActivityTypeArgs } from "./args/UpdateActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
export declare class UpdateActivityTypeResolver {
    updateActivityType(ctx: any, info: GraphQLResolveInfo, args: UpdateActivityTypeArgs): Promise<ActivityType | null>;
}
