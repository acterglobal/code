import { IntFilter } from "../inputs/IntFilter";
import { InterestListRelationFilter } from "../inputs/InterestListRelationFilter";
import { InterestTypeListRelationFilter } from "../inputs/InterestTypeListRelationFilter";
import { InterestTypeRelationFilter } from "../inputs/InterestTypeRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class InterestTypeWhereInput {
    AND?: InterestTypeWhereInput[] | undefined;
    OR?: InterestTypeWhereInput[] | undefined;
    NOT?: InterestTypeWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    parent?: InterestTypeRelationFilter | undefined;
    children?: InterestTypeListRelationFilter | undefined;
    sortOrder?: IntFilter | undefined;
    parentInterestTypeId?: StringNullableFilter | undefined;
    Interests?: InterestListRelationFilter | undefined;
}
