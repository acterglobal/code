import { UpdateActivityArgs } from "./args/UpdateActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class UpdateActivityResolver {
    updateActivity(ctx: any, args: UpdateActivityArgs): Promise<Activity | null>;
}
