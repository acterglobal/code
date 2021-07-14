import { ActerTypeRuleCountAggregate } from "../outputs/ActerTypeRuleCountAggregate";
import { ActerTypeRuleMaxAggregate } from "../outputs/ActerTypeRuleMaxAggregate";
import { ActerTypeRuleMinAggregate } from "../outputs/ActerTypeRuleMinAggregate";
export declare class ActerTypeRuleGroupBy {
    id: string;
    canCreate: boolean;
    canJoin: boolean;
    canBecome: boolean;
    subjectActerTypeId: string;
    objectActerTypeId: string;
    count: ActerTypeRuleCountAggregate | null;
    min: ActerTypeRuleMinAggregate | null;
    max: ActerTypeRuleMaxAggregate | null;
}
