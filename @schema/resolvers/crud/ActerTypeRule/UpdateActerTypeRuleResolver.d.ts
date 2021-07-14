import { GraphQLResolveInfo } from "graphql";
import { UpdateActerTypeRuleArgs } from "./args/UpdateActerTypeRuleArgs";
import { ActerTypeRule } from "../../../models/ActerTypeRule";
export declare class UpdateActerTypeRuleResolver {
    updateActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: UpdateActerTypeRuleArgs): Promise<ActerTypeRule | null>;
}
