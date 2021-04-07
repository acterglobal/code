import { UpsertActivityArgs } from "./args/UpsertActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class UpsertActivityResolver {
    upsertActivity(ctx: any, args: UpsertActivityArgs): Promise<Activity>;
}
