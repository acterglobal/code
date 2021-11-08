import { Acter } from "../models/Acter";
import { Notification } from "../models/Notification";
import { PostCount } from "../resolvers/outputs/PostCount";
export declare class Post {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    Parent?: Post | null;
    parentId?: string | null;
    Comments?: Post[];
    Acter?: Acter;
    acterId: string;
    Author?: Acter;
    authorId: string;
    Notification?: Notification[];
    _count?: PostCount | null;
}
