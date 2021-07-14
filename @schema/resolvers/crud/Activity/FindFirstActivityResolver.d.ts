import { GraphQLResolveInfo } from "graphql";
import { FindFirstActivityArgs } from "./args/FindFirstActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class FindFirstActivityResolver {
    findFirstActivity(ctx: any, info: GraphQLResolveInfo, args: FindFirstActivityArgs): Promise<Activity | null>;
}
