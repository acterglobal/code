import { GraphQLResolveInfo } from "graphql";
import { CreateActivityTypeArgs } from "./args/CreateActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
export declare class CreateActivityTypeResolver {
    createActivityType(ctx: any, info: GraphQLResolveInfo, args: CreateActivityTypeArgs): Promise<ActivityType>;
}
