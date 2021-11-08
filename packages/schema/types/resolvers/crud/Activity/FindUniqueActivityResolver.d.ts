import { GraphQLResolveInfo } from "graphql";
import { FindUniqueActivityArgs } from "./args/FindUniqueActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class FindUniqueActivityResolver {
    activity(ctx: any, info: GraphQLResolveInfo, args: FindUniqueActivityArgs): Promise<Activity | null>;
}
