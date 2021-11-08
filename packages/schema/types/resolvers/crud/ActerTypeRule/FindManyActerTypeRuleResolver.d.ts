import { GraphQLResolveInfo } from "graphql";
import { FindManyActerTypeRuleArgs } from "./args/FindManyActerTypeRuleArgs";
import { ActerTypeRule } from "../../../models/ActerTypeRule";
export declare class FindManyActerTypeRuleResolver {
    acterTypeRules(ctx: any, info: GraphQLResolveInfo, args: FindManyActerTypeRuleArgs): Promise<ActerTypeRule[]>;
}
