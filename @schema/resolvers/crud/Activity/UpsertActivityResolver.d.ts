import { GraphQLResolveInfo } from "graphql";
import { UpsertActivityArgs } from "./args/UpsertActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class UpsertActivityResolver {
    upsertActivity(ctx: any, info: GraphQLResolveInfo, args: UpsertActivityArgs): Promise<Activity>;
}
