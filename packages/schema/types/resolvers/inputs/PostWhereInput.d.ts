import { ActerRelationFilter } from "../inputs/ActerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PostWhereInput {
    AND?: PostWhereInput[] | undefined;
    OR?: PostWhereInput[] | undefined;
    NOT?: PostWhereInput[] | undefined;
    id?: StringFilter | undefined;
    content?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    Parent?: PostRelationFilter | undefined;
    parentId?: StringNullableFilter | undefined;
    Comments?: PostListRelationFilter | undefined;
    Acter?: ActerRelationFilter | undefined;
    acterId?: StringFilter | undefined;
    Author?: ActerRelationFilter | undefined;
    authorId?: StringFilter | undefined;
    Notification?: NotificationListRelationFilter | undefined;
}
