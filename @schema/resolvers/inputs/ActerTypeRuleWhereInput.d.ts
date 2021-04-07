import { ActerTypeRelationFilter } from "../inputs/ActerTypeRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ActerTypeRuleWhereInput {
    AND?: ActerTypeRuleWhereInput[] | undefined;
    OR?: ActerTypeRuleWhereInput[] | undefined;
    NOT?: ActerTypeRuleWhereInput[] | undefined;
    id?: StringFilter | undefined;
    canCreate?: BoolFilter | undefined;
    canJoin?: BoolFilter | undefined;
    canBecome?: BoolFilter | undefined;
    Subject?: ActerTypeRelationFilter | undefined;
    subjectActerTypeId?: StringFilter | undefined;
    Object?: ActerTypeRelationFilter | undefined;
    objectActerTypeId?: StringFilter | undefined;
}
