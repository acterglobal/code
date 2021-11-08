import { GraphQLResolveInfo } from "graphql";
import { CreateActerTypeRuleArgs } from "./args/CreateActerTypeRuleArgs";
import { ActerTypeRule } from "../../../models/ActerTypeRule";
export declare class CreateActerTypeRuleResolver {
    createActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: CreateActerTypeRuleArgs): Promise<ActerTypeRule>;
}
