import { Activity } from "../models/Activity";
import { ActivityTypeCount } from "../resolvers/outputs/ActivityTypeCount";
export declare class ActivityType {
    id: string;
    name: string;
    Activity?: Activity[];
    _count?: ActivityTypeCount | null;
}
