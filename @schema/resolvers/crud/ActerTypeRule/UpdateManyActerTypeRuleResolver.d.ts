import { GraphQLResolveInfo } from "graphql";
import { UpdateManyActerTypeRuleArgs } from "./args/UpdateManyActerTypeRuleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyActerTypeRuleResolver {
    updateManyActerTypeRule(ctx: any, info: GraphQLResolveInfo, args: UpdateManyActerTypeRuleArgs): Promise<AffectedRowsOutput>;
}
