import { ActerInterestListRelationFilter } from "../inputs/ActerInterestListRelationFilter";
import { InterestTypeRelationFilter } from "../inputs/InterestTypeRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class InterestWhereInput {
    AND?: InterestWhereInput[] | undefined;
    OR?: InterestWhereInput[] | undefined;
    NOT?: InterestWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    sdgNumber?: StringNullableFilter | undefined;
    InterestType?: InterestTypeRelationFilter | undefined;
    interestTypeId?: StringFilter | undefined;
    InterestActers?: ActerInterestListRelationFilter | undefined;
}
