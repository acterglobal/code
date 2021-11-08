import { Acter } from "../../../models/Acter";
import { Notification } from "../../../models/Notification";
import { Post } from "../../../models/Post";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
import { PostNotificationArgs } from "./args/PostNotificationArgs";
export declare class PostRelationsResolver {
    Parent(post: Post, ctx: any): Promise<Post | null>;
    Comments(post: Post, ctx: any, args: PostCommentsArgs): Promise<Post[]>;
    Acter(post: Post, ctx: any): Promise<Acter>;
    Author(post: Post, ctx: any): Promise<Acter>;
    Notification(post: Post, ctx: any, args: PostNotificationArgs): Promise<Notification[]>;
}
