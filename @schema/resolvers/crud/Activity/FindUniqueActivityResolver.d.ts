import { FindUniqueActivityArgs } from "./args/FindUniqueActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class FindUniqueActivityResolver {
    activity(ctx: any, args: FindUniqueActivityArgs): Promise<Activity | null>;
}
