import { Acter } from "../models/Acter";
import { User } from "../models/User";
export declare class ActerConnection {
    id: string;
    isApproved?: boolean | null;
    createdAt: Date;
    updatedAt: Date;
    CreatedByUser?: User;
    createdByUserId: string;
    Follower?: Acter;
    followerActerId: string;
    Following?: Acter;
    followingActerId: string;
}
