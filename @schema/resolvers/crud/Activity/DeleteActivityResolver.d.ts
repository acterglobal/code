import { DeleteActivityArgs } from "./args/DeleteActivityArgs";
import { Activity } from "../../../models/Activity";
export declare class DeleteActivityResolver {
    deleteActivity(ctx: any, args: DeleteActivityArgs): Promise<Activity | null>;
}
