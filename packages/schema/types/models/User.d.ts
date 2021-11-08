import { Acter } from "../models/Acter";
import { ActerConnection } from "../models/ActerConnection";
import { ActerInterest } from "../models/ActerInterest";
import { Activity } from "../models/Activity";
import { Invite } from "../models/Invite";
import { Link } from "../models/Link";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
    auth0ProviderId?: string | null;
    intercomId?: string | null;
    Acter?: Acter | null;
    acterId?: string | null;
    ActersCreated?: Acter[];
    ActerConnections?: ActerConnection[];
    LinksCreated?: Link[];
    ActerInterest?: ActerInterest[];
    ActivitiesCreated?: Activity[];
    ActersDeleted?: Acter[];
    Invite?: Invite[];
    _count?: UserCount | null;
}
