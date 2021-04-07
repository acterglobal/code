import { FindFirstActivityArgs } from "./args/FindFirstActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class FindFirstActivityResolver {
    findFirstActivity(ctx: any, args: FindFirstActivityArgs): Promise<Activity | null>;
}
