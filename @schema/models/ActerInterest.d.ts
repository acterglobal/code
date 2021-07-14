import { Acter } from "../models/Acter";
import { Interest } from "../models/Interest";
import { User } from "../models/User";
export declare class ActerInterest {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    CreatedByUser?: User;
    createdByUserId: string;
    Acter?: Acter;
    acterId: string;
    Interest?: Interest;
    interestId: string;
}
