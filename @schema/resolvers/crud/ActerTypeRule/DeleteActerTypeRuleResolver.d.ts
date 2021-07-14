import { GraphQLResolveInfo } from "graphql";
import { DeleteActerTypeRuleArgs } from "./args/DeleteActerTypeRuleArgs";
import { ActerTypeRule } from "../../../models/ActerTypeRule";
export declare class DeleteActerTypeRuleResolver {
    deleteActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: DeleteActerTypeRuleArgs): Promise<ActerTypeRule | null>;
}
