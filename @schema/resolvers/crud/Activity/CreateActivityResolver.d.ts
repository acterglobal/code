import { CreateActivityArgs } from "./args/CreateActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class CreateActivityResolver {
    createActivity(ctx: any, args: CreateActivityArgs): Promise<Activity>;
}
