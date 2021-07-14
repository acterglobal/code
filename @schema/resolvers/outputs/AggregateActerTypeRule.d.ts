import { ActerTypeRuleCountAggregate } from "../outputs/ActerTypeRuleCountAggregate";
import { ActerTypeRuleMaxAggregate } from "../outputs/ActerTypeRuleMaxAggregate";
import { ActerTypeRuleMinAggregate } from "../outputs/ActerTypeRuleMinAggregate";
export declare class AggregateActerTypeRule {
    count: ActerTypeRuleCountAggregate | null;
    min: ActerTypeRuleMinAggregate | null;
    max: ActerTypeRuleMaxAggregate | null;
}
