import { ActerTypeRuleCountAggregate } from "../outputs/ActerTypeRuleCountAggregate";
import { ActerTypeRuleMaxAggregate } from "../outputs/ActerTypeRuleMaxAggregate";
import { ActerTypeRuleMinAggregate } from "../outputs/ActerTypeRuleMinAggregate";
export declare class AggregateActerTypeRule {
    _count: ActerTypeRuleCountAggregate | null;
    _min: ActerTypeRuleMinAggregate | null;
    _max: ActerTypeRuleMaxAggregate | null;
}
