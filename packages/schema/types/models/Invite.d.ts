import { Acter } from "../models/Acter";
import { User } from "../models/User";
export declare class Invite {
    id: string;
    email: string;
    message: string;
    error: string;
    createdAt: Date;
    updatedAt: Date;
    sentAt: Date;
    acceptedAt: Date;
    OnActer?: Acter;
    onActerId: string;
    createdByUser?: User;
    createdByUserId: string;
}
