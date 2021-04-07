import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class InterestTypeScalarWhereInput {
    AND?: InterestTypeScalarWhereInput[] | undefined;
    OR?: InterestTypeScalarWhereInput[] | undefined;
    NOT?: InterestTypeScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    sortOrder?: IntFilter | undefined;
    parentInterestTypeId?: StringNullableFilter | undefined;
}
