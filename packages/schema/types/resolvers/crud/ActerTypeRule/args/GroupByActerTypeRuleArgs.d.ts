import { ActerTypeRuleOrderByWithAggregationInput } from "../../../inputs/ActerTypeRuleOrderByWithAggregationInput";
import { ActerTypeRuleScalarWhereWithAggregatesInput } from "../../../inputs/ActerTypeRuleScalarWhereWithAggregatesInput";
import { ActerTypeRuleWhereInput } from "../../../inputs/ActerTypeRuleWhereInput";
export declare class GroupByActerTypeRuleArgs {
    where?: ActerTypeRuleWhereInput | undefined;
    orderBy?: ActerTypeRuleOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "canCreate" | "canJoin" | "canBecome" | "subjectActerTypeId" | "objectActerTypeId">;
    having?: ActerTypeRuleScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
