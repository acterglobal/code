import { ActerType } from "../../../models/ActerType";
import { ActerTypeRule } from "../../../models/ActerTypeRule";
export declare class ActerTypeRuleRelationsResolver {
    Subject(acterTypeRule: ActerTypeRule, ctx: any): Promise<ActerType>;
    Object(acterTypeRule: ActerTypeRule, ctx: any): Promise<ActerType>;
}
