import { FindManyActivityArgs } from "./args/FindManyActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class FindManyActivityResolver {
    activities(ctx: any, args: FindManyActivityArgs): Promise<Activity[]>;
}
