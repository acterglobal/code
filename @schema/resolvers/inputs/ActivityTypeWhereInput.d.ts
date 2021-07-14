import { ActivityListRelationFilter } from "../inputs/ActivityListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ActivityTypeWhereInput {
    AND?: ActivityTypeWhereInput[] | undefined;
    OR?: ActivityTypeWhereInput[] | undefined;
    NOT?: ActivityTypeWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    Activity?: ActivityListRelationFilter | undefined;
}
