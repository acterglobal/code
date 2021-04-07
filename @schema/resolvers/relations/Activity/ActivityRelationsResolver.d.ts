import { Acter } from "../../../models/Acter";
import { Activity } from "../../../models/Activity";
import { User } from "../../../models/User";
export declare class ActivityRelationsResolver {
    createdByUser(activity: Activity, ctx: any): Promise<User>;
    Acter(activity: Activity, ctx: any): Promise<Acter | null>;
    Organiser(activity: Activity, ctx: any): Promise<Acter | null>;
}
