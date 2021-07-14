import { GraphQLResolveInfo } from "graphql";
import { FindUniqueActerTypeRuleArgs } from "./args/FindUniqueActerTypeRuleArgs";
import { ActerTypeRule } from "../../../models/ActerTypeRule";
export declare class FindUniqueActerTypeRuleResolver {
    acterTypeRule(ctx: any, info: GraphQLResolveInfo, args: FindUniqueActerTypeRuleArgs): Promise<ActerTypeRule | null>;
}
