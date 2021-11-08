import { ActerTypeRuleOrderByWithRelationInput } from "../../../inputs/ActerTypeRuleOrderByWithRelationInput";
import { ActerTypeRuleWhereInput } from "../../../inputs/ActerTypeRuleWhereInput";
import { ActerTypeRuleWhereUniqueInput } from "../../../inputs/ActerTypeRuleWhereUniqueInput";
export declare class FindFirstActerTypeRuleArgs {
    where?: ActerTypeRuleWhereInput | undefined;
    orderBy?: ActerTypeRuleOrderByWithRelationInput[] | undefined;
    cursor?: ActerTypeRuleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "canCreate" | "canJoin" | "canBecome" | "subjectActerTypeId" | "objectActerTypeId"> | undefined;
}
