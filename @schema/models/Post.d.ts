import { Acter } from "../models/Acter";
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
}
