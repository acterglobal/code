import { GraphQLResolveInfo } from "graphql";
import { FindManyActivityArgs } from "./args/FindManyActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class FindManyActivityResolver {
    activities(ctx: any, info: GraphQLResolveInfo, args: FindManyActivityArgs): Promise<Activity[]>;
}
