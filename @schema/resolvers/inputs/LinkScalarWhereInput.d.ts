import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class LinkScalarWhereInput {
    AND?: LinkScalarWhereInput[] | undefined;
    OR?: LinkScalarWhereInput[] | undefined;
    NOT?: LinkScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    url?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    acterId?: StringFilter | undefined;
    createdByUserId?: StringFilter | undefined;
}
