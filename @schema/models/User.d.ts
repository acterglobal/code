import { Acter } from "../models/Acter";
import { ActerConnection } from "../models/ActerConnection";
import { ActerInterest } from "../models/ActerInterest";
import { Activity } from "../models/Activity";
import { Link } from "../models/Link";
export declare class User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
    Acter?: Acter | null;
    acterId?: string | null;
    ActersCreated?: Acter[];
    ActerConnections?: ActerConnection[];
    LinksCreated?: Link[];
    ActerInterest?: ActerInterest[];
    ActivitiesCreated?: Activity[];
    ActersDeleted?: Acter[];
}
