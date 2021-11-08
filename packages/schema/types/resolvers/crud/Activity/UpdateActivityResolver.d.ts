import { GraphQLResolveInfo } from "graphql";
import { UpdateActivityArgs } from "./args/UpdateActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class UpdateActivityResolver {
    updateActivity(ctx: any, info: GraphQLResolveInfo, args: UpdateActivityArgs): Promise<Activity | null>;
}
