import { GraphQLResolveInfo } from "graphql";
import { UpsertActivityTypeArgs } from "./args/UpsertActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
export declare class UpsertActivityTypeResolver {
    upsertActivityType(ctx: any, info: GraphQLResolveInfo, args: UpsertActivityTypeArgs): Promise<ActivityType>;
}
