import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class InterestScalarWhereInput {
    AND?: InterestScalarWhereInput[] | undefined;
    OR?: InterestScalarWhereInput[] | undefined;
    NOT?: InterestScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    sdgNumber?: StringNullableFilter | undefined;
    interestTypeId?: StringFilter | undefined;
}
