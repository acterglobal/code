import { GraphQLResolveInfo } from "graphql";
import { UpsertActerTypeRuleArgs } from "./args/UpsertActerTypeRuleArgs";
import { ActerTypeRule } from "../../../models/ActerTypeRule";
export declare class UpsertActerTypeRuleResolver {
    upsertActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: UpsertActerTypeRuleArgs): Promise<ActerTypeRule>;
}
