import { GraphQLResolveInfo } from "graphql";
import { FindFirstActerTypeRuleArgs } from "./args/FindFirstActerTypeRuleArgs";
import { ActerTypeRule } from "../../../models/ActerTypeRule";
export declare class FindFirstActerTypeRuleResolver {
    findFirstActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: FindFirstActerTypeRuleArgs): Promise<ActerTypeRule | null>;
}
