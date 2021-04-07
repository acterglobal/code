import { ActerTypeRuleOrderByInput } from "../../../inputs/ActerTypeRuleOrderByInput";
import { ActerTypeRuleWhereInput } from "../../../inputs/ActerTypeRuleWhereInput";
import { ActerTypeRuleWhereUniqueInput } from "../../../inputs/ActerTypeRuleWhereUniqueInput";
export declare class ActerTypeActerTypeRulesArgs {
    where?: ActerTypeRuleWhereInput | undefined;
    orderBy?: ActerTypeRuleOrderByInput[] | undefined;
    cursor?: ActerTypeRuleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "canCreate" | "canJoin" | "canBecome" | "subjectActerTypeId" | "objectActerTypeId"> | undefined;
}
