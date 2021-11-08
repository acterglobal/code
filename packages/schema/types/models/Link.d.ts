import { Acter } from "../models/Acter";
import { User } from "../models/User";
export declare class Link {
    id: string;
    name: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
    Acter?: Acter;
    acterId: string;
    createdByUser?: User;
    createdByUserId: string;
}
