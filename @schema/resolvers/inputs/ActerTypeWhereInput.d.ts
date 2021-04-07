import { ActerListRelationFilter } from "../inputs/ActerListRelationFilter";
import { ActerTypeRuleListRelationFilter } from "../inputs/ActerTypeRuleListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ActerTypeWhereInput {
    AND?: ActerTypeWhereInput[] | undefined;
    OR?: ActerTypeWhereInput[] | undefined;
    NOT?: ActerTypeWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    Acter?: ActerListRelationFilter | undefined;
    ActerTypeRules?: ActerTypeRuleListRelationFilter | undefined;
    RulesOnActerType?: ActerTypeRuleListRelationFilter | undefined;
}
