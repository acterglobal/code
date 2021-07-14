import { BoolFilter } from "../inputs/BoolFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ActerTypeRuleScalarWhereInput {
    AND?: ActerTypeRuleScalarWhereInput[] | undefined;
    OR?: ActerTypeRuleScalarWhereInput[] | undefined;
    NOT?: ActerTypeRuleScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    canCreate?: BoolFilter | undefined;
    canJoin?: BoolFilter | undefined;
    canBecome?: BoolFilter | undefined;
    subjectActerTypeId?: StringFilter | undefined;
    objectActerTypeId?: StringFilter | undefined;
}
