import { GraphQLResolveInfo } from "graphql";
import { CreateActivityArgs } from "./args/CreateActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class CreateActivityResolver {
    createActivity(ctx: any, info: GraphQLResolveInfo, args: CreateActivityArgs): Promise<Activity>;
}
